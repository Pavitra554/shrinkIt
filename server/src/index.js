const express = require('express')
require('./db/mongoose')
const main = require('./routes/main')



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(main)

app.listen(PORT,()=>{
    console.log(`Server is live on http://localhost:${PORT}`)
})