const express = require('express')
require('./db/mongoose')
const main = require('./routes/main')
const cors = require('cors')



const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()) 
app.use(express.json())
app.use(main)

app.listen(PORT,()=>{
    console.log(`Server is live on http://localhost:${PORT}`)
})