// Steps to set up:
    // Step 0: touch server.js
    // Step 1: npm init -y
    // Step 2: npm i express
    // Step 3: touch .gitignore
    // Step 4: add node_modules directory to gitignore
    // Step 5: Check dependencies in package.json
    // Step 6: nodemon

//1. Import Express
const express = require ('express')

//2. Create a new server (ie instance of express)
const app = express()

//3. Set PORT variable
const PORT = 4000


// 4. Start the server
app.listen(PORT, () => console.log(`Running on Port ${PORT}`))