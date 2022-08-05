const findTheOldest = function(ar) {


    let x = ar.reduce((obj, person) => {

        if(person.yearOfDeath === undefined){
            person.yearOfDeath = new Date().getFullYear();
        }


        let age = person.yearOfDeath - person.yearOfBirth;

        if(age > obj.age){
            obj.age = age;
            obj.name = person.name;
        }

        return obj;
    }

,{age:0})

return x;

};

// Do not edit below this line
module.exports = findTheOldest;
