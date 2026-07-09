function getIndexToIns(arr, num) {
  const sorted = [...arr].sort((a, b) => a - b);
  let index = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (num > sorted[i]) {
      index++;
    }
  }

  return index;
}
getIndexToIns([40, 60], 50);