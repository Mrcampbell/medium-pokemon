module.exports = {
  client: 'postgresql',
  connection: {
    host: 'postgres', // this name must match the name of the docker-compose service.
    database: 'pokemon', // creds set in docker-compose environment
    user:     'user',
    password: 'password',
    port: 5432, // this must match the internal port, not the one we proxy in the dc.yaml
  },
};
