function cloneObj(orig) {
  const origProto = Object.getPrototypeOf(orig);
  return Object.assign({ name: 'name' }, orig)
};

const result = cloneObj({ name: 'truong', status: 'resolved' });

console.log(result);