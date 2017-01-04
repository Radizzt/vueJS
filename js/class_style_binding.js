/*Object Syntax*/

var class1 = new Vue({
   el: "#class1",
    data:{
        message: "inspect parent div",
        isActive: true,
        hasError: false,
        classObject:{
            'active': false,
            'text-danger' : true
        }
    },
    computed:{
        computedObject: function(){
            console.log(this.hasError.type);
            return{
                active: this.isActive && !this.hasError,
                'text-danger': this.hasError && this.hasError.type === 'fatal'
            }
        }
    }

});

/*Array Syntax*/
var class2 = new Vue({
   el:"#class2",
    data:{
        message: "Array Syntax",
        activeClass: "active",
        errorClass: 'text-danger',
        isActive: true
    }
});






