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

/** Binding Inline Style **/
/*Object Syntax*/
var bind1 = new Vue({
   el:"#bind1",
    data:{
        activeColor: 'red',
        fontSize: 30,
        styleObject:{
            color: 'red',
            'font-size': '13px'
        },
        baseStyles:{
            color : "yellow"
        },
        overridingStyles:{
            color:"purple"
        },
        transformObject:{
            color : "pink",
            position: 'relative',
            transform: "translateX(30%)"
        }
    }
});




