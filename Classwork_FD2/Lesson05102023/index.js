console.log(getEven(10,2,3,4,5,6));


function getEven(...args){
   //const numbers = [...args];

   return args.filter((num) => num % 2 === 0); 
}
