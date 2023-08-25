module.exports = ({ env }) => ({
  host: env('HOST', 'ttbackend-production-d6df.up.railway.app'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
