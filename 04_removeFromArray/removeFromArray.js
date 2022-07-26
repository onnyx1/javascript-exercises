const removeFromArray = function(array, ...items) {

 let list = array.filter(

    function(value) {

        if(items.indexOf(value) != -1){
            items.splice(items.indexOf(value),1);
            return false;
        }

        return true;

    }
 )

 return list;

}

// Do not edit below this line
module.exports = removeFromArray;
