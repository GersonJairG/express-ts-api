import express from 'express'

import diaryRouter from 'routes/diaries'

const app = express()
app.use(express.json()) // middleware to transform the req.body into json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log(`someone pinged here!! ${new Date().toLocaleDateString()}`)
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
