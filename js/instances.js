/***** Properties and Methods *****/
var data = { a: 1, b:2 }
var vm = new Vue({
    //el: ".property",
    data: data
});

console.log("vm.a: " + vm.a);
console.log("data.a: " +  data.a);
console.log("vm.a = 5");
console.log("data.a: " + data.a);

var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
})
vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true
// $watch is an instance method
vm.$watch('a', function (newVal, oldVal) {
    // this callback will be called when `vm.a` changes
    console.log("changed!");
});

/***** Lifecycles (https://vuejs.org/images/lifecycle.png) and Hooks *****/

//create hooks
var hook = new Vue({
    data: {
        a: 1
    },
    created: function () {
        // `this` points to the vm instance
        console.log('create hook: a is: ' + this.a)
    }
});



