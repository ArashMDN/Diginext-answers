function repeater(str: string, n: number) {
  let result = str;
  let j = 0;
  if (str.length < n) {
    for (let i = 0; i < n - str.length; i++) {
      result += str[j];
      if (j < str.length - 1) {
        j++;
      } else {
        j = 0;
      }
    }
  }
  return result;
}

console.log(repeater("abc", 10));
