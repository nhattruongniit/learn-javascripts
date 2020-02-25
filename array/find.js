const projects = [
  {
    id: 1,
    title: 'project 1'
  },
  {
    id: 2,
    title: 'project 2'
  },
  {
    id: 3,
    title: 'project 3'
  },
  {
    id: 4,
    title: 'project 4'
  },
  {
    id: 5,
    title: 'project 5'
  },
]

const ids = "1, 2";
// const idArray = ids.replace(/\s/,"").split(",").map(Number);
const idArray = ids.split(",").map(Number);
const newProjects = [];

projects.forEach(project => {
  const index = idArray.findIndex(id => id === project.id);
  if (index < 0) {
    newProjects.push(project)
  }
})

console.log('=========', idArray.slice())

