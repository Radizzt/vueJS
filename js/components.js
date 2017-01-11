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

/*Custom Events*/
Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function () {
            this.counter += 1;
            //emit the event, so the parent updates
            this.$emit('domincrement');
        }
    }
});


new Vue({
    el: '#component3',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1;
        }
    }
});

Vue.component('currency-input', {
    template: '\
    <div>\
      <label v-if="label">{{ label }}</label>\
      $\
      <!-- ref is used to register a reference to an element or a child component. -->\
      <!-- updateValue() is trigger on each input. -->\
      <!-- focus trigger when an input box is focused (for safari bug only). -->\
      <!-- blur trigger when an input box is not focus. -->\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
        v-on:focus="selectAll"\
        v-on:blur="formatValue"\
      >\
    </div>\
  ',
    props: {
        value: {
            type: Number,
            default: 0
        },
        label: {
            type: String,
            default: ''
        }
    },
    //hook that is called after the instance has just been created, like a constructor everytime this component is call in the DOM
    mounted: function () {
        this.formatValue()
    },
    methods: {
        updateValue: function (value) {
            var result = currencyValidator.parse(value, this.value);
            //if there's a warning from the validator. the current value will go back to what it was before the warning
            if (result.warning) {
                this.$refs.input.value = result.value;
            }
            //emit the event on the current instance, need it to update the value
            this.$emit('input', result.value);
        },
        //format the value (put '.00' if there isn't one
        formatValue: function () {
            this.$refs.input.value = currencyValidator.format(this.value);
        },
        //if you're not using safari, you dont need this method
        selectAll: function (event) {
            // Workaround for Safari bug
            // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
            setTimeout(function () {
                event.target.select();
            }, 0);
        }
    }
});

var bus = new Vue();

new Vue({
    el: '#component4',
    data: {
        price: 0,
        shipping: 0,
        handling: 0,
        discount: 0
    },
    computed: {
        total: function () {
            return ((
                this.price * 100 +
                this.shipping * 100 +
                this.handling * 100 -
                this.discount * 100
            ) / 100).toFixed(2);
        }
    }
});

