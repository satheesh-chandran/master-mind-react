export default (start, end) =>
  Array.from(new Array(end - start), (_, index) => start + index);
