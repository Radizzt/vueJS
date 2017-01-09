/*basic Usage*/
var input1 = new Vue({
    el:"#input1",
    data:{
        //must initiate data, else it wont work.
        message: '',
        textAreaMessage:'',
        checked: false,
        checkedNames: [],
        picked:'',
        selected:'',
        multiSelect:[],
        dynSelected:'A',
        options:[
            {text: 'One', value:'A'},
            {text: 'Two', value:'B'},
            {text: 'Three', value:'C'}
        ]
    }
});