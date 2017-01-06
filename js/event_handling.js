/*Listener*/
var event1 = new Vue({
   el:"#event1",
    data: {
        counter : 0,
        name: "Vue.js"
    },
    methods:{
        greet: function(e){
            // `this` inside methods points to the Vue instance
            alert('Hello ' + this.name + '!');
            // `event` is the native DOM event
            alert(event.target.tagName);

        },
        say : function(message){
            alert(message);
        },
        warn: function(message, event){
            // now we have access to the native event
            if (event)
                event.preventDefault();
            alert(message)
        }
    }
});


// you can invoke methods in JavaScript too
//event1.greet(); // -> 'Hello Vue.js!'







