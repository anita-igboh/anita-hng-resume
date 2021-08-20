const mongoose = require ('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex : true,
    useFindAndModify: false,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=> console.log('Database is running'))
