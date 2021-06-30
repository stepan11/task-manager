require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('60d4e0a7a9339e0d18495732')
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async id => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('60d4e20d95f1313a00e60944')
  .then(count => console.log(count))
  .catch(e => console.log(e));
