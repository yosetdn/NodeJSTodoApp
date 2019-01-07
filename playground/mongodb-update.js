const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Sucesfully')
  //findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5c31bb4c3edff42290757cf3')
  },{
    $set:{
      completed: false
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });
});
