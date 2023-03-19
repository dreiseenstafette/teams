import { IncomingWebhook } from '@slack/webhook';
import { log } from 'next-axiom';

const url = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(url);

const stringify = (body: any) => {
    return `Vorname: ${body.vorname}
Nachname: ${body.nachname}
Email: ${body.email}
Thema: ${body.thema}
Anfrage: ${body.kommentar}`
};

export default function handler(req: any, res: any) {
    const body = req.body

    if (!body.spamcheck || !body.spamcheck1 || !body.spamcheck2) {
        res.status(400).json({ text: `Netter Versuch aber ohne die gelöste Rechnung versenden wir keine Nachrichten :P ` })
    }

    if (body.spamcheck != +body.spamcheck1 + +body.spamcheck2) {
        res.status(400).json({ text: `Netter Versuch aber ${body.spamcheck1} + ${body.spamcheck2} != ${body.spamcheck} :P` });
    }

    if (!body.vorname
        || !body.nachname
        || !body.email
        || !body.thema
        || !body.kommentar) {
        log.debug('form is not complete', body)
        res.redirect(302, '/404')
    }

    if (body.kommentar.includes("advanceleadgeneration")) {
        res.status(418).json({ text: `Nice try but not interested ❌` })
    }

    webhook.send({
        text: `Anfrage über das Kontaktformular: ${stringify(body)}`,
    }).then(() => {
        const params = new URLSearchParams({
            titel: 'Danke für deine Nachricht ✉️',
            text: 'Wir haben sie erhalten und werden uns so bald wie möglich bei dir melden.',
        }).toString();
        res.redirect(302, `/success?${params}`)
    }).catch((err) => {
        log.debug('failed to send message to slack channel', err)
        const params = new URLSearchParams({
            handler: 'kontakt',
            data: body,
            error: err,
        }).toString();
        res.redirect(302, `/500?${params}`)
    });
}
