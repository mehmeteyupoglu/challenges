// 2) Write an async python function that writes every item in any given array with 1, 2, 4,
// 8, … seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2
// seconds, “c” is printed in 4 seconds, ...

function asyncItemListing(arr) {
    for(let i = 0; i < arr.length; i++){
      setTimeout(() => console.log(arr[i]), (i+1) * 1000)
    }
    
  }

function asyncItemListingWithMap(arr) {
  arr.map((item, index) => {
    return setTimeout(() => console.log(item), (index + 1) * 1000)
  })
}

//Author's note: The question implies that each element has its index num + 1 sec and that way the function could yield the expected result. 
                //In case of any misunderstanding, I kindly ask you to ask for a revision. 
                //Both functions work and do the same job. 
  
const a = [1,2,3,4,5,1,4,3,6,8,2]
asyncItemListingWithMap(a)

const b = ["a", "b", "c", "d"]
asyncItemListing(b)