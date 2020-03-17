module.exports = function check(str, bracketsConfig) {
  let char, last, stack = [];
  let brackets = {};

  if (str.length % 2 !== 0) return false;

  bracketsConfig.flat().map((item, index, array) => {
    if ( index % 2 !== 0 ) {
        brackets[array[index - 1]] = item;
    }
  });

  for(let i = 0; i < str.length; i++) {
    char = str[i];

    for (let key in brackets) {
      if(char === key && !stack.includes(brackets[key])){
        stack.push(char);
      } else if (char === brackets[key]) {

        if(stack.length > 0){
          last = stack[stack.length - 1];

          if ((char === brackets[key] && last === key)){
            stack.pop();
          }
        }
      }
    }
  }

  return stack.length === 0;
};
