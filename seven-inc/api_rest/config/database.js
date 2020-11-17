const mongoose = require('mongoose');

module.exports = () => {
    var url = process.env.DB || 'mongodb://localhost:27017/api_rest';
    var options = {
        useNewUrlParser: true,
        useUnifieldTopology: true,
        poolSize: 10
    }
    mongoose.connect(url, options);

    mongoose.connection.once('open', () => {
        console.log("[Mongoose] Conectado em " + url);
    });

    mongoose.connection.on('error', (error) => {
        console.log("[Mongoose] Erro na conexão: " + error);
    });
};