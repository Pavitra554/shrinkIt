const mongoose = require('mongoose')

const mongoDB = process.env.MONGODB_URL

mongoose.connect(mongoDB,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to the database ✅');
}).catch((error) => {
    console.error('Failed to connect to the database 🚧', error);
});
