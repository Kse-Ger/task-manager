require('mongodb-legacy')
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id)
console.log(id.toHexString())
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    /*
     
    db.collection('tasks').insertOne({
        description: 'Fill in CATS',
        completed: false
    },  (error, task) => {
        if(error) {
            return console.log('Unable to fetch')
        }
        console.log(task)
    })
    
    db.collection('tasks').findOne({ _id: new ObjectID("647f4d719f65b9138734500f") }, (error, task) => {
        if(error) {
            return console.log('Unable to fetch')
        }
        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, task) => {
        console.log(task)
    })

    db.collection('users').updateOne(
        { _id: new ObjectID("647ce32d32e5f108869e7e9c") }, 
        {
            $inc: { age: 4 }
        }
    ).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    }) 
    
    db.collection('tasks').updateMany(
        { completed: false },
        {
            $set: { completed: true } 
        }
    ).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').deleteMany(
        { age: 26 }
    ).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })  
    
    */

    db.collection('tasks').deleteOne(
        { description: "Fill in CATS" }
    ).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    }) 
})