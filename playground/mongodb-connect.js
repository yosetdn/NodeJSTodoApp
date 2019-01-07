const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Sucesfully')
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err,result)=>{
  //   if(err){
  //       return console.log('Unable to insert todo',err);
  //   }
  //     console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name:'Yoset',
    age:21,
    Location:'Guzman City'
  },(err,result)=>{
    if(err)
      return consol.log('Unable to interset user',err);
    console.log(JSON.stringify(result.ops,undefined,2));
  });

  db.close();
});
