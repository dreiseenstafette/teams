import { IncomingWebhook } from '@slack/webhook';
import { log } from 'next-axiom';

const url = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(url);

const stringify = (body: any) => {
    return `Mail: ${body.email}`
};

export default function handler(req: any, res: any) {
    const body = req.body

    if (!body.email) {
        log.debug('form is not complete', body)
        res.redirect(302, '/404')
    }

    webhook.send({
        text: `Anmeldung für den Newsletter: ${stringify(body)}`,
    }).then(() => {
        const params = new URLSearchParams({
            titel: 'Du bist angemeldet!',
            text: 'Zumindest für den Newsletter ;) Wir melden und meist so ab Frühling regelmässig bis vor dem Wettkampf. Stay tuned!',
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
