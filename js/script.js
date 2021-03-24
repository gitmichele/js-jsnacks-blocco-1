function show(arr){
    
    for (var i=0; i<arr.length; i++){
        
        var obj = arr[i];

        // loggo solo nome e cognome
        console.log(Object.values(obj).splice(0,2));
    }
};

function addObj(arr){

    var newName = prompt('nome');
    var newLastname = prompt('cognome');
    var newAge = parseInt(prompt('età'));

    var newObj = {'name': newName, 'lastname': newLastname, 'age': newAge};
    arr.push(newObj)

    console.log(arr);
}


function init(){

    var students = [
        {'name': 'Tizio 1', 'lastname': 'Dei Tizi 1', 'age': 20},
        {'name': 'Tizio 2', 'lastname': 'Dei Tizi 2', 'age': 30},
        {'name': 'Tizio 3', 'lastname': 'Dei Tizi 3', 'age': 40},
        {'name': 'Tizio 4', 'lastname': 'Dei Tizi 4', 'age': 50},
        {'name': 'Tizio 5', 'lastname': 'Dei Tizi 5', 'age': 60}
    ];

    // show(students)
    addObj(students)
};

$('document').ready(init)