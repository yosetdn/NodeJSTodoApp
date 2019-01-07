const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Sucesfully')

  // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch the data',err);
  // });

  // db.collection('Todos').find({_id: new ObjectID('5c31b9b23edff42290757c77')}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch the data',err);
  // });

  db.collection('Todos').find().count().then((count)=>{
    console.log('Todos count:',count);
  },(err)=>{
    console.log('Unable to fetch the data',err);
  });

  db.close();
});
