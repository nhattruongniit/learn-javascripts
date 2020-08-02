
const columns = ['list-1', 'list-2', 'list-3'];

const swap = (sourceIndex, destinationIndex) => {
  const newLColumns = [...columns];
  const t = newLColumns.splice(sourceIndex, 1)[0];
  newLColumns.splice(destinationIndex, 0 ,t);

  return newLColumns;
}

const result = swap(1, 2);

console.log('swap: ', result, columns )