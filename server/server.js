const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require ('./db/mongoose');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
      res.send({todos});
    },(e)=>{
      res.status(400).send(e);
    })
});


app.get('/todos/:id',(req,res)=>{
  const id = req.params.id;
  if(!ObjectID.isValid(id)) return res.status(404).send('');

  Todo.findById(id).then((todo)=>{
     if(!todo) return res.status(404).send('');
     res.send(todo);
   }).catch((e)=>{
     res.status(400).send(e);
   })
});

app.delete('/todos/:id',(req,res)=>{
  const id = req.params.id;
  if(!ObjectID.isValid(id)) return res.status(404).send('');
  Todo.findByIdAndRemove(id).then((todo)=>{
     if(!todo) return res.status(404).send('Your item doesnt exist');
     res.send(todo);
   }).catch((e)=>{
     res.status(400).send(e);
   })
});

app.listen(3000,()=>{
  console.log('Started on port 3000');
});



module.exports = {app};
