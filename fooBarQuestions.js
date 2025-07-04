// Function to return:
// "fooBar" if n is divisible by 5 or 7,
// "bar" if divisible by 5,
// "foo" if divisible by 3,
// otherwise "nothing"
let n=13

function fooBarQuestion(n){
    if(n%5==0 || n%7==0){
        return "fooBar"
    }else if(n%5==0){
        return "bar"
    }else if(n%3==0){
        return "foo"
    }else{
        return 'nothing'
    }
}
console.log(fooBarQuestion(n))
