// Questions 
// 1) Write a function that finds the duplicate items in any given array.

function findDuplicate(arr) {

    let duplicateArr = []

    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] === arr[j]) {
                duplicateArr.push(arr[j])
            }
        }
    }

    return duplicateArr
}

// const a = [1,2,3,4,5,1,4,3,6,8,2]
// console.log(findDuplicate(a))

// const b = ["a", 1, 4, 134, "b", "c", 34, 1, 134, "a"]
// console.log(findDuplicate(b))