// const divElement=document.getElementById("one")
// divElement.innerHTML="Welcome to FSD"

// let player={
//     jno:18,
//     pname:"Virat",
//     mp:100,
//     rs:5000,
//     'mom-name':'Saroj',
//     dad:100,
//     'dad-name':'Prem Nath'
// }

// const name=99

// console.log('I like ' , player.pname);
// console.log(`I like ${player.pname}`)
// console.log(player['pname'])

// console.log(player['mom-name'])
// console.log(player.dad-name)
// console.log(player['dad-name'])
// console.log(player)
// player.centuries=85


// let player={
//     pno:18,
//     pname:'Virat'
// }
// console.log(player)
// player.pno=45;
// player.pname='Rohit';
// console.log(player)


// player="Apple"


// let sum = 0;
// for (let i=1;i<=5;i++)
//     sum += i;


// console.log(sum)

// let array = [1,2,3,4,5,6,7,8,9]
// let sum_for_each = 0
// array.forEach(element => {
//     sum_for_each += element;
// });
// let sum1= 0
// for (let element of object) {
//     sum += element
//     if(sum >=100){
//         break
//     }
// }



let cars = ['abcd','bc','c','d']

// cars.forEach(c =>{
//     if(c=='c')
//         return
//     console.log(c)
    
// })

let greet = () =>{
    console.log("hello")
}

// greet()

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

// display all odd number using filter or reduce

let oddNumbers = arr.filter(num => num % 2 !== 0);

// console.log(oddNumbers); // [1, 3, 5, 7, 9]
let squares = oddNumbers.map(num => num * num);
// console.log(squares)




let player = {
    jno:18,

}

console.log(typeof(player.jno))