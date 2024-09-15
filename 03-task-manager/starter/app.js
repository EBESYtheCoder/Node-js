const express = require('express');
const app = express()
const tasks = require('./routes/tasks.js')
const connectDB = require('./db/connect.js')
require('dotenv').config()
const notFound = require('./middleware/not-found.js')
const errorHandlerMiddleware = require('./middleware/error-handlers')
const allAccess = require('./middleware/connect_to_.js')


// middleware 
app.use(express.static('./public'))
app.use(express.json())
app.use(allAccess) // allow access to backend from another file


// routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listening on port ${port}...`))
  } catch {
    console.log(error)
  }
}
start()



