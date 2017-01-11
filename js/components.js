/*Components*/

//register
Vue.component('my-component', {
   template: "<div>A custom component!</div>"
});

var Child = {
    template: "<div>This is another component</div>"
};

Vue.component("my-row",{
    template: "<tr class='test'>" +
    "<th>my head!</th>" +
    "<th class='orange'>my header!</th>" +
    "<th>my Headest!</th>" +
    "</tr>"
});


//data must be a function
//var data = {counter : 0}; //remove comment to use the wrong way to return data.

Vue.component("simple-counter",{
    template: "<button @click='counter += 1'> {{counter}} </button>",
    data: function() {
        //this is wrong because since all three component instances share the same data object, incrementing one counter increments them all!
        //return data;
        /*the right way: Now all our counters each have their own internal state:*/

        return {
            counter : 0
        };
    }
});

//create a root instance
new Vue({
   el: '#component1',
    components:{
        // <my-component> will only be available in parent's template
        "my-component2": Child
    }
});

/*properties*/
Vue.component('child', {
    // declare the props
    // camelCase Props MUST be in kebab-case on the html file
    props: ['message', "message2", "myMessage"],
    // just like data, the prop can be used inside templates
    // and is also made available in the vm as this.message
    template: '<p>message: {{ message }}, <br> message2: {{message2}}, <br> myMessage: {{myMessage}}</p>'
});

Vue.component("child2",{
    props: ["myMessage"],
    template: "<p>myMessage: {{myMessage}}</p>"

});

Vue.component("sum", {
   props: ["num"],
    template: "<p> {{num + 1}}</p>"
});

var Child2 = {
    template: "<child2 myMessage='test'></child2>"
};

//Instead of defining the props as an array of strings, you can use an object with validation requirements:

Vue.component('propValidation', {
    props: {
        // basic type check (`null` means accept any type)
        propA: Number,
        // multiple possible types
        propB: String,
        // a required string
        propC: {
            type: String,
            required: true
        },
        // a number with default value
        propD: {
            type: Number,
            default: 100
        },
        // object/array defaults should be returned from a
        // factory function
        propE: {
            type: Object,
            default: function () {
                return { message: 'hello' }
            }
        },
        // custom validator function
        propF: {
            type: Number,
            validator: function (value) {
                console.log("inside validator: " + value);
                return value > 10;
            }
        }
    },
    template:"<div>" +
    "<p>PropA (Number): {{propA}}</p>" +
    "<p>PropB ([String, Number]): {{propB}}</p>" +
    "<p>PropC (Require String): {{propC}}</p>" +
    "<p>PropD (Default Number): {{propD}}</p>" +
    "<p>PropE (Default Object/Array): {{propE}}</p>" +
    "<p>PropF (Custom Validator): {{propF}} </p>" +
    "</div>"
});

new Vue({
    el: "#component2",
    data:{
      parentMsg: '',
        inputNum:'',
        object:{
            notDefault: "not Default Message"
        },
        test:'test'
    },
    components:{
        //using string template to use 'myMessage' instead of my-message
        children : Child2
    }

});



