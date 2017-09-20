const decimalFormat = (num_string) => {
  let split_string = num_string.split('.');
  let split_concat = split_string[0].concat('.').concat(split_string[1][0]).concat(split_string[1][1]);
  return split_concat
}

export default decimalFormat;
