const express = require('express')
const app = express()

const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client("523384873779-e29ttamvfnbfkhb650ppufoas5qmr328.apps.googleusercontent.com")

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res) => {
    res.sendFile(__dirname+'/login.html')
})

app.post('/gsignin', (req,res) => {
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken : req.body.idtoken,
            audience : "523384873779-e29ttamvfnbfkhb650ppufoas5qmr328.apps.googleusercontent.com"
    })
    const payload = ticket.getPayload()
    const userid = payload['sub']
    }
    res.send()
    verify().catch(console.error)
})

app.listen('3000' , ()=> console.log("server running on 3000"))
