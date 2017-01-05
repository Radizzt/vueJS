/*v-if*/
var if1 = new Vue({
    el:"#if1",
    data:{
        ok : true,
        type : "d"
    }
});

//controlling reuseable elements with key
var if2 = new Vue({
   el:"#if2",
    data:{
        loginType: "username",
        loginType2: "username"
    },
    methods:{
        toggle:function(e){
            e.preventDefault();
            if(this.loginType === "username"){
                this.loginType = "something else";
            }
            else{
                this.loginType = "username";
            }
        },
        toggle2:function(e){
            e.preventDefault();
            if(this.loginType2 === "username"){
                this.loginType2 = "something else";
            }
            else{
                this.loginType2 = "username";
            }
        }
    }
});

/*v-show*/
var show1 = new Vue({
   el: "#show1",
    data:{
        ok: true
    },
    methods:{
        toggle:function(e){
            e.preventDefault();
            this.ok = this.ok == true ? false : true;
        }
    }
});




