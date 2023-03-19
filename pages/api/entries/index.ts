import { createGuestbookEntry, listGuestbookEntries } from "../../../lib/fauna"

export default async function handler(req: any, res: any) {
  const handlers: any = {
    GET: async () => {
      const entries = await listGuestbookEntries()

      res.json(entries)
    },

    POST: async () => {
      const {
        body: {
          name,
          title,
          kind,
          category,
          message,
          contact,
        },
      } = req
      const created = await createGuestbookEntry({
        kind,
        category,
        name,
        contact,
        title,
        message,
        createdAt: new Date(),
      })

      res.json(created)
    },
  }

  if (!handlers[req.method]) {
    return res.status(405).end()
  }

  await handlers[req.method]()
}
