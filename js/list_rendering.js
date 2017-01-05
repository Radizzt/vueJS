/*v-for*/
var for1 = new Vue({
   el:"#for1",
    data:{
        items:[
            {message: "Foo"},
            {message: "Bar"}
        ],
        parentMessage : "Parent",
        items2:[
            {message: "Foo"},
            {message: "Bar"}
        ],
        forItem:[
            {msg:"for"},
            {msg:"template"}

        ],
        object:{
            firstName: "John",
            lastName: "Doe",
            age: 30
        },
        todos:[
            {isComplete : true, duty : "do the dishes"},
            {isComplete : false, duty : "do the bed"}
        ]

    }
});

Vue.component('todo-item', {
    template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
    props: ['title']
})
new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ]
    },
    methods: {
        addNewTodo: function () {
            this.todos.push(this.newTodoText)
            this.newTodoText = ''
        }
    }
})

