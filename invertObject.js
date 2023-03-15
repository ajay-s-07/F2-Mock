    function inverse(obj){
        var newObj = {};

        for(var key in obj){
            newObj[obj[key]] = key;
        }
        return newObj;
    }
    
    var student =
    {
        name : "Jack",
        age: 18,
        std : 12,
        fees : 5000
    }

    console.log(student);
    student = inverse(student);
    console.log(student);
