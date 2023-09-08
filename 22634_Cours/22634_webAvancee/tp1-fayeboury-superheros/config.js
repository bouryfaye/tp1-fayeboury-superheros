const dotenv = require('dotenv')
dotenv.config()
module.exports = {
    PORT: process.env.PORT, /*on va demander d'appeler les informations du port */
    API_KEY: process.env.API_KEY /*on va demander d'appeler les informations api key */
}