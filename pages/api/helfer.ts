export default function handler(req: any, res: any) {
  const body = req.body

  res.status(200).json({
    message: 'Hi there! This is not yet operational. Maybe you can check again later.',
    email: `${body.email}`,
    password: `${body.password}`,
  })
}
