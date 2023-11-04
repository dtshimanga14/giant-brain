const { MongoClient, ServerApplication } = require('mongodb');
const config = require('../config/config.js');

const STACK = process.env.STACK || '';

const MONGO_URL = ((config || {})[STACK] || {}).MONGO_URL;

const getAll = (name) => () => {
    if(!MONGO_URL) {
        throw new Error('MONGO_URL is not defined');
    }
    return new Promise(resolve=> {
        resolve({ name, MONGO_URL});
    });
} ;


module.exports = (collectionName)=>  ({
    getAll: getAll(collectionName)
});