// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = monodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    //// Update

    // db.collection('users')
    //   .updateOne(
    //     {
    //       _id: new ObjectID('60d36ee5e64d773f58d94629'),
    //     },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // db.collection('users')
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then(result => console.log(result))
    //   .catch(err => console.log(err));

    //// Delete

    // db.collection('users')
    //   .deleteMany({
    //     age: 27,
    //   })
    //   .then(result => console.log(result))
    //   .catch(err => console.log(err));

    db.collection('tasks')
      .deleteOne({
        description: 'to buy a milk',
      })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }
);
