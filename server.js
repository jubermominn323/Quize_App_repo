const express = require('express')
const app = express()
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000
require("dotenv").config();
const authRoutes = require("./routes/auth")
const path = require('path')

app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URI, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB connected"))
.catch(err => console.log("DB connection failed", err))
app.use(cors())

app.use(morgan('tiny'));
app.use("/api", authRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*',()=> {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}
// if(process.env.NODE_ENV === "development") {
//     app.use(cors());
// }

app.listen(PORT, () => {
console.log(`App is running at port ${PORT}-${process.env.NODE_ENV}`)
})
