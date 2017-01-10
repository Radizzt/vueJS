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




