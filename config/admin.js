module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'AhJAGJeRveCkQBfqv/Zgug=='),
  },
  apiToken: {
    // salt: env('API_TOKEN_SALT'),
    salt: env('API_TOKEN_SALT', 'cS2eJ8WFsJTtdVIbTTaZBQ=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
