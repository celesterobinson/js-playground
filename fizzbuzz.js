// JAVASCRIPT

function fizzbuzz() {
    for (let i = 1; i < 101; i++) {
        let num = i;
        let divByThree = num % 3 === 0;
        let divByFive = num % 5 === 0;
        if ( (divByThree) && (divByFive) ) {
            num = "Fizzbuzz";
        } else if ( divByThree ) {
            num = "Fizz";
        } else if ( divByFive ) {
            num = "Buzz";
        }
        console.log(num);
    }
}

fizzbuzz()

