const resolveDbDomain = () => {
  return process.env.FAUNA_DB_DOMAIN ?? 'db.eu.fauna.com'
}

export default resolveDbDomain;
