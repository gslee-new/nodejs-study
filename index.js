const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:1234qwer@cluster0.rtr2s.mongodb.net/Cluster0?retryWrites=true&w=majority',{
    useNewUrlParser:true
}).then(()=> console.log('MongoDb connection!!!!'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})