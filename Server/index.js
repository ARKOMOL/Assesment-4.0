const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const http = require("http")
const {Server} = require("socket.io");

//midlleware 
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server,{
    cors :{
        origin:"http://localhost:3000",
        methods:["GET","PUT","DELETE","POST"]
    }
});

// pass ; SM1Ex4n1VvDdN0dc
//====================================
const uri = "mongodb+srv://Assesment-4:SM1Ex4n1VvDdN0dc@cluster0.ra7na2o.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        await client.connect();
        const recordsCollection = client.db('allRecords').collection('records');

         /* get data */

         app.get('/records',async (req, res) => {
            const query = {};
            const cursor = recordsCollection.find(query); 
            const records = await cursor.toArray(); 
            res.send(records) 
          });
          // add records
          app.post('/add-records',async (req,res)=>{
            const newRecords= req.body;
            const result = await recordsCollection.insertOne(newRecords);
            res.send(result); 
    
        })

           /*===================Delete======================*/

    app.delete('/records/:id', async (req,res)=>{
        const id = req.params.id;
        const query ={_id: ObjectId(id)};
        const deleteItem = await recordsCollection.deleteOne(query);
        res.send(deleteItem);
    })
    }
    finally{
        
    }

}

run().catch(console.dir);
//========================



app.get('/',(req,res)=>{
    res.send('john is running and waiting for you')
})


app.listen(port,()=>{
    console.log('john is running in runnig ',port);
})




// after porcees 

/* 
const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion } = require('mongodb');


//midlleware 
app.use(cors());
app.use(express.json());

//================Connet to Cluster============== 


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8c3ja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{

    }
    finally{
        
    }

}

run().catch(console.dir);


//==============================================


app.get('/',(req,res)=>{
    res.send('john is running and waiting for you')
})


app.listen(port,()=>{
    console.log('john is running in runnig ',port);
})


*/