require('dotenv').config();
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
app.use(
    fileUpload({
        extended: true
    })
)
app.use(express.static(__dirname))
app.use(express.json())
const ethers = require("ethers");
const path = require('path');

var port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

const API_URL = process.env.API_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const contractAddress = process.env.CONTRACT_ADDRESS

const { abi } = require('./artifacts/contracts/TaskTodo.sol/TaskToDo.json')
const provider = new ethers.providers.JsonRpcProvider(API_URL)

const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const contractInstance = new ethers.Contract(contractAddress, abi, signer);


app.post('/addTask', async (req, res) => {
    var task = req.body.task

    async function storeDataInBlockchain(task) {
        console.log('Storing data in blockchain')
        const tx = await contractInstance.addTask(task)
        await tx.wait()
    }
    await storeDataInBlockchain(task);
    res.send('Task added to blockchain')
})

app.post('/changeStatus', async (req, res) => {
    var id = req.body.id

    async function storeDataInBlockchain(id) {
        console.log('changing the task status in blockchain')
        const tx = await contractInstance.MarkAsCompleted(id)
        await tx.wait()
    }
    await storeDataInBlockchain(id);
    res.send('Task status changed in blockchain')
})

app.listen(port, function () {
    console.log(`Server is running on port ${port}`)
});