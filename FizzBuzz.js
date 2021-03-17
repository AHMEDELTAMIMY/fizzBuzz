
// 1.define emapte Array
// 2.write number from 1 to 135
// 3.check the numbers which abel to dividing by 3 and 5
// 4.check the numbers which abel to dividing by 3 
// 5.check the numbers which abel to dividing by 5
// 6.check the remain numbers which not abel for dividing 3 ,5, and both
// 7.print the numbers as 1,2,fizz,4,buzz


var arr = [];
for(var i=1; 1< 136; i++){
    if((i%3 == 0) && (i%5 == 0)){
        arr.push('FizzBuzz')
    }
    else if(i%3 == 0 ){
        arr.push('Fizz')
    }
    else if(i%5 == 0 ){
        arr.push('Buzz')
    }
    else {
        arr.push(i)
    }
}
console.log(arr)

// 1%3 && 1%5 =false ,1%3=false ,1%5 =false =>1
// 2%3 && 2%5 =false ,2%3 =false ,2%5 =false =>2
// 3%3 && 3%5 =false ,3%3 =true ,1%5 =false =>Fizz
// 4%3 && 4%5 =false ,4%3 =false ,4%5 =false =>4
// 5%3 && 5%5 =false ,5%3 =false ,5%5 =true =>Buzz
// ........................
// 15%3 && 15%5 =true ,=>FizzBuzz



