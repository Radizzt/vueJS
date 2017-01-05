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
});

var for2 = new Vue({
   el:"#for2",
    data:{
        items:[
            {message : "Foo"},
            {message : "Bar"}
        ],
        numbers: [1,2,3,4,5]
    },
    methods:{
        replace: function(e){
            e.preventDefault();
            this.items = this.items.filter(function(item){
                return item.message.match(/Foo/)
            })
        },
        even: function(numbers){
            console.log(numbers);
            return numbers.filter(function(number){
                return number % 2 === 0;
            })
        }
    },
    computed:{
        evenNumbers: function(){
            return this.numbers.filter(function(number){
                return number % 2 === 0;
            });
        }
    }
});

/*Caveats*/
/*
 Due to limitations in JavaScript, Vue cannot detect the following changes to an array:
 When you directly set an item with the index, e.g. vm.items[indexOfItem] = newValue
 When you modify the length of the array, e.g. vm.items.length = newLength
 To overcome caveat 1, both of the following will accomplish the same as vm.items[indexOfItem] = newValue, but will also trigger state updates in the reactivity system:
 // Vue.set
 Vue.set(example1.items, indexOfItem, newValue)
 // Array.prototype.splice`
 example1.items.splice(indexOfItem, 1, newValue)
 To deal with caveat 2, you can also use splice:
 example1.items.splice(newLength)
*/

