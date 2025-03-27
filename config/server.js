
module.exports = ({ env }) => {
  
  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS', ['V3gHC7B9hdsClmMnRiTqGw==,AqGwWQNeGVn016RYXIZwBg==,NYE5Bb+MKapcs5d91xRDVQ==,fWIbsavfd2ZoXXbuxbbBig==']),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  };
};
