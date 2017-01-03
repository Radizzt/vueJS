

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