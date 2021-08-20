const express = require('express')
const app = express()
require('dotenv').config()
require('./config/db');
const User = require ('./models/User');
const path = require('path');
const PORT = process.env.PORT || 4000
app.use(express.urlencoded({extended: false}))
//set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.post('/postMessage', async ( request, response) => {
const { full_name, email,code,number,message} = request.body
if (!full_name || !email || !message) {
    return response.status(400).json({msg: 'Provide the required details'})
}
const user = await User.create({
    full_name, email,code,number,message
})
response.json({msg: 'Message sent successfully'})
} )
app.listen(PORT, () => { console.log(`SERVER IS LISTENING ON PORT ${PORT}`) })



