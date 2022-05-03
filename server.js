// Steps to set up:
    // Step 0: touch server.js
    // Step 1: npm init -y
    // Step 2: npm i express
    // Step 3: touch .gitignore
    // Step 4: add node_modules directory to gitignore
    // Step 5: Check dependencies in package.json
    // Step 6: nodemon

// Steps to set up EJS
    // Step 1: npm i ejs
    // Step 2: App Configurations: app.set('view engine', 'ejs')
    // Step 3: Create new directory called views & files inside will be .ejs 


//1. Import Express
//2. Create a new server (ie instance of express)
//3. Set PORT variable

const express = require ('express')
const app = express()
const PORT = 4000
app.set('view engine','ejs')


// 4. Start the server
app.listen(PORT, () => console.log(`Running on Port ${PORT}`))