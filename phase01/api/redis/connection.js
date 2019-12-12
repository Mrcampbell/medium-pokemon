const redis = require('redis')

module.exports = redis.createClient({host: 'redis', port: 6379})