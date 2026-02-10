import express from 'express'

const app = express();

app.use(express.json())
const PORT = Bun.env.PORT ?? 3000;





app.listen(3000, () => {
    console.log("srvr is still alive: " + PORT)
})