// 4) Write an efficient method that tells us whether or not an input string brackets ("{", "}",
// "(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
// “{([)]}” => false

let isProper = (string) => {

    let brackets = "[]{}()<>"
    let stack = []
  
    for(let item of string) {
      let index = brackets.indexOf(item)
  
      if(index % 2 === 0) {
        stack.push(index + 1)
      } else {
        if(stack.pop() !== index) {
          return false;
        }
      }
    }
    return stack.length === 0
  }

  console.log(isProper("{[]}"))
  console.log(isProper("{(])}"))
  console.log(isProper("{([)]}"))