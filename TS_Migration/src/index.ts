import express from 'express';
const app = express();

app.get('/',(req: any, res: any) => {
    res.send("This is index page");
})

app.listen(3000, () => console.log("Server started"));