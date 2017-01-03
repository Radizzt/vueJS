

//text
var syn1 = new Vue({
    el: "#syntax-1",
    data: {
        msg: "hello world",
        staticMsg: "never change" //static property
    }
});

//rawHTML
var syn2 = new Vue({
   el: "#syntax-2",
    data: {
        msg: "raw HTML",
        rawHtml: "<a href='http://www.google.ca'> Google link </a>" //sending Raw HTML - WARNING: CAREFUL OF XSS
    }

});

//Attribute
var vm = new Vue({
    el: ".attrib",
    data: {
        dynamicId : "weeesdsds",
        att:"attributesss",
        rawHtml: "raw"
    }
});

//argument
var syn3 = new Vue({
    el: "#syntax-3",
   data: {
       ok : "something"
   }
});

//Directive
var syn4 = new Vue({
   el: "#syntax-4",
    data: {
        seen: true
    }
});

//arguments
var syn5 = new Vue({
   el: "#syntax-5",
    data:{
        url: "http://google.ca",
        name: "name of something"
    },
    methods: {
        doSomething: function(e){
            e.preventDefault();
            alert("name value is: " + this.name);
        }
    }
});

//modifier
var form1 = new Vue({
    el:"#form1",
    methods:{
        onSubmit:function(e){
            console.log("form submit");
        }
    }
});

//filter
new Vue({
    el: "#syntax-6",
    data:{
        message:"this is a message",
        rawId: "rawID"
    },
    filters: {
        capitalize: function (value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
        lastCap: function(value){
            if (!value) return '';
            value = value.toString();
            return value.slice(0, value.length) + value.charAt(value.length - 1).toUpperCase();
        },
        //first argument is the initial value of the filter (message in thsi case)
        foo: function(value, str2, str3){
            console.log(value);
            console.log(str2);
            console.log(str3);
            return " " + value + " " +  str2 + " " + str3;
        }
    }
});



