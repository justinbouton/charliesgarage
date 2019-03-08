//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
const uri = 'mongodb://localhost:27017/simple-mern-passport' 

// TODO utilize mLab
// const uri = 'mongodb://dbuser:NoWfu99lFcRL0Qk6@userauth-shard-00-00-f9azg.mongodb.net:27017,userauth-shard-00-01-f9azg.mongodb.net:27017,userauth-shard-00-02-f9azg.mongodb.net:27017/test?ssl=true&replicaSet=UserAuth-shard-0&authSource=admin&retryWrites=true'
  

mongoose.connect(uri).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );


module.exports = mongoose.connection