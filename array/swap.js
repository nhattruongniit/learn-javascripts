const columns = ['list-1', 'list-2', 'list-3'];

const swap = (sourceIndex, destinationIndex) => {
  const newSwap = [...columns];
  [newSwap[sourceIndex], newSwap[destinationIndex]] = [newSwap[destinationIndex], newSwap[sourceIndex]]
  return newSwap;
}

const result = swap(0, 1);

console.log('swap: ', result, columns )