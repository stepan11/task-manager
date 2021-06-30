require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('60d495f961d8ae388c1ff71a', { age: 1 }, { new: true })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age: age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('60d495f961d8ae388c1ff71a', 2)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
