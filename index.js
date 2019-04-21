

for(let i = 0; i < 101; i++) {
    const fizz = i % 3 == 0 ? true : false;
    const buzz = i % 5 == 0 ? true : false;
    
    if(fizz && !buzz) {
        console.log('Fizz');
    }
    if(!fizz && buzz) {
        console.log('Buzz');
    }
    if(fizz && buzz && i > 0 ) {
        console.log('FizzBuzz');
    }
    if(!fizz && !buzz) {
        console.log(i);
    }
}
