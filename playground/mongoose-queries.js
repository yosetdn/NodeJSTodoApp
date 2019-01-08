const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '6c34e174a2f376746929b86f';
Todo.find({
  _id: id
}).then((todos)=>{
  if(todos.length===0) return console.log('No matches');;
  console.log('Todos',todos);
});

Todo.findOne({
  _id: id
}).then((todo)=>{
  if(!todo) return console.log('No matches');
  console.log('Todo',todo);
})

Todo.findById(id).then((todo)=>{
  if(!todo) return console.log('No matches');
  console.log('Todo by id',todo);
})
