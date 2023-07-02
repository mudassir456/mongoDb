const mongoose = require("mongoose");

async function connectingToMongoDb() {
    try {
        const connectionURI = 'mongodb://127.0.0.1:27017/my_server';
        await mongoose.connect(connectionURI, { useNewUrlParser: true });
        console.log("connecting successful")
    } catch (error) {
        console.log(error)
    }
}

module.exports =connectingToMongoDb