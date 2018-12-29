const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('success')
  res.send('success')
})

app.listen(3000, () => console.log('start'))