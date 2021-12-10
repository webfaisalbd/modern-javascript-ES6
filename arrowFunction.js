// normal function 
// function number(a,b){
//     return a+b;
// }
// console.log(number(2,5));

// let sum = (x) => x+x;
// console.log(sum(10));

// let add = x => x+15;
// console.log("addition value is: "+ add(5) + ". And that is the answer");

// let mul = (x,y) => x+y;
// console.log(mul(2,4));


// why arrow function come 
// var javascript = {
//     name: 'javascript',
//     libraries: ['react','node','vue'],
//     printLibraries: function () {
//         var self=this;
//         this.libraries.forEach(function(a){
//             console.log(`${self.name} loves ${a}`);
//         })
//     }
    
// }
// javascript.printLibraries();



// why arrow function come using arrow function
var javascript = {
    name: 'javascript',
    libraries: ['react','node','vue'],
    printLibraries: function () {
        
        this.libraries.forEach((a)=> console.log(`${this.name} loves ${a}`))
    }
    
}
javascript.printLibraries();





