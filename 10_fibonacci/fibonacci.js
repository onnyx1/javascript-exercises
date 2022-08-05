const fibonacci = function(n) {
    let n1 = 0, n2 = 1, nextTerm;

    if( n < 0){
        return "OOPS";
    }
    
    for (let i = 1; i <= n; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;



    }

    return n1;


};

// Do not edit below this line
module.exports = fibonacci;
