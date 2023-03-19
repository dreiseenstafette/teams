import { IncomingWebhook } from '@slack/webhook';
import { log } from 'next-axiom';

const url = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(url);

const stringify = (body: any) => {
  return `Vorname: ${body.vorname}
Nachname: ${body.nachname}
Jahrgang: ${body.jahrgang}
Wohnort: ${body.wohnort}
Schule: ${body.schule}
Klasse: ${body.klasse}
Email: ${body.email}
Geschlecht: ${body.geschlecht}`
};

export default function handler(req: any, res: any) {
  const body = req.body

  if (!body.vorname
    || !body.nachname
    || !body.jahrgang
    || !body.wohnort
    || !body.schule
    || !body.klasse
    || !body.email
    || !body.geschlecht) {
    log.debug('form is not complete', body)
    res.redirect(302, '/404')
  }

  webhook.send({
    text: `Anmeldung für 'Diä schnellste Seebachtaler:inne': ${stringify(body)}`,
  }).then(() => {
    const params = new URLSearchParams({
      titel: 'Anmeldung erfolgreich 🎉',
      text: `Du (${body.vorname} ${body.nachname}) bist für "Diä schnellste Seebachtaler:inne" angemeldet! Cool bist du mit dabei und wir freuen uns, dich an der DSS begrüssen zu dürfen 😊 Bis dann!`,
    }).toString();
    res.redirect(302, `/success?${params}`)
  }).catch((err) => {
    log.debug('failed to send message to slack channel', err)
    const params = new URLSearchParams({
      handler: 'seebachtaler',
      error: err,
    }).toString();
    res.redirect(302, `/500?${params}`)
  });
}
