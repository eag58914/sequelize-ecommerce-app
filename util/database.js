const monogodb = require('mongodb')
const MongoClient = monogodb.MongoClient;

const monogoConnect = () =>{
    MongoClient.connect('mongodb+srv://eag58914:Phoenix171894!@cluster0.j0qwc.mongodb.net/<dbname>?retryWrites=true&w=majority').then(client=>{
    console.log('Connected!')
    
}).catch(err=>{ console.log(err)})

}

module.exports = monogoConnect



