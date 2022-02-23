const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/login',(req,res)=>{
    res.send('hello')
})

app.listen(PORT, function () {
  console.log("listening on port 3001!");
});
