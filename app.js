const express = require('express')
const app = express()

const keys = require('./auth.json')

const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(keys.web.client_id,
    keys.web.client_secret,
    keys.web.redirect_uris[0])

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res) => {
    res.sendFile(__dirname+'/login.html')
})


app.post('/gsignin', (req,res) => {

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken : req.body.token,
            audience : "523384873779-e29ttamvfnbfkhb650ppufoas5qmr328.apps.googleusercontent.com"
    })
    let id = req.body.idtoken

    const payload = ticket.getPayload()
    const userid = payload['sub']
    }
    res.send()
    verify().catch(console.error)
})

app.listen('3000' , ()=> console.log("server running on 3000"))
