function show(obj){

    for (var key in obj){

        console.log(obj[key]);
    };
    

};


function init(){

    var students = {
        'name' : 'Tizio',
        'lastname': 'Dei Tizi',
        'age' : 30
    };

    show(students)
};

$('document').ready(init)