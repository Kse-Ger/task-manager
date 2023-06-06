require('mongodb-legacy')
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        _id: id,
        name: 'Aivar',
        age: 29
    }, (error, result) => {
        if (error) {
            return  console.log('Unable to insert user')
        }

        console.log(result.ops)
    })

    /* db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 28
        },
        {
            name: 'Gunther',
            age: 27
        }
    ], (error, result) => {
        if (error) {
            return  console.log('Unable to insert user')
        }

        console.log(result.ops)
    }) */

    /* db.collection('tasks').insertMany([
        {
            description: 'Spend a day in office',
            completed: true
        },{
            description: 'Change bed scheets',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return  console.log('Unable to write tasks')
        }

        console.log(result.ops)
    }) */

})