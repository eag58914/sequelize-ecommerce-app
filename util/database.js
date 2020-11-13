const monogodb = require('mongodb')


const MongoClient = monogodb.MongoClient;



let _db ;


const mongoConnect = () =>{
    MongoClient.connect('mongodb+srv://eag58914:Phoenix171894!@cluster0.j0qwc.mongodb.net/<dbname>?retryWrites=true&w=majority').then(client=>{
    console.log('Connected!')
    _db = client.db()
    
}).catch(err=>{ console.log(err); throw err})

}



const getDb = () =>{
    if(_db){
        return _db
    }

    throw 'No database found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

