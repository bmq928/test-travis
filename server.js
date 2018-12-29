const express = require('express')
const { exec } = require('child_process')
const app = express()

app.get('/', (req, res) => {
  exec('cd ./app-inside && git pull origin master', (err) => {
    console.log('success')
    res.send('success')
  })
  
})

app.listen(3000, () => console.log('start'))