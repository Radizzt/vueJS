/*Computed Properties*/

var comp1 = new Vue({
    el: "#comp1",
    data:{
        message: "Hello"
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('');
        },
        now: function () {
            return Date.now()
        }
    }
});

var comp2 = new Vue({
    el: "#comp2",
    data:{
        message: "Hello"
    },
    methods: {
         reversedMessage: function () {
            return this.message.split('').reverse().join('');
        },
        now: function () {
            return Date.now()
        }
    }
});

var comp3 = new Vue({
    el: '#comp3',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    watch: {
        firstName: function (val) {
            //val is the value of firstName since it's watching that variable it will knows its value
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
});

var comp4 = new Vue({
    el: '#comp4',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    }
});

var comp5 = new Vue({
    el: '#comp5',
    data: {
        firstName: 'Setter',
        lastName: 'And Getter'
    },
    computed: {
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        }
    }
});









