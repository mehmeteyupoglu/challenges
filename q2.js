// 2) Write an async python function that writes every item in any given array with 1, 2, 4,
// 8, … seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2
// seconds, “c” is printed in 4 seconds, ...


// function asyncItemListing(arr) {
    
//     arr.map(item => {
//         return setInterval(() => console.log(item), 1000)
//     })

// }

function asyncItemListing(arr) {
    for(let i = 0; i < arr.length; i++){
      setTimeout(() => console.log(arr[i]), i * 1000)
    }
  }
  
const c = [1,2,3,4,5,1,4,3,6,8,2]
asyncItemListing(c)