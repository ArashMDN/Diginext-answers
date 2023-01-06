function resolver(str: string) {
  let first = str[0];
  let result = first;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === first) {
      continue;
    }
    first = str[i];
    result += str[i];
  }
  return str.length - result.length;
}

console.log(resolver("ababaabababbbb"));
