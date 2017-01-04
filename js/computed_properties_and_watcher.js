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

/* WATCHER */
var watchExampleVM = new Vue({
    el: '#watch1',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        // whenever question changes, this function will run
        question: function (newQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.getAnswer()
        }
    },
    methods: {
        // _.debounce is a function provided by lodash to limit how
        // often a particularly expensive operation can be run.
        // In this case, we want to limit how often we access
        // yesno.wtf/api, waiting until the user has completely
        // finished typing before making the ajax request. To learn
        // more about the _.debounce function (and its cousin
        // _.throttle), visit: https://lodash.com/docs#debounce
        getAnswer: _.debounce(
            function () {
                var vm = this;
                if (this.question.indexOf('?') === -1) {
                    vm.answer = 'Questions usually contain a question mark. ;-)';
                    return
                }
                vm.answer = 'Thinking...';
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        console.log(response);
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function (error) {
                        vm.answer = 'Error! Could not reach the API. ' + error
                    })
            },
            // This is the number of milliseconds we wait for the
            // user to stop typing.
            500
        )
    }
})







