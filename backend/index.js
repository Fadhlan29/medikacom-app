import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './src/config/database.js'
import UserRoute from './src/routes/UserRoute.js'

dotenv.config()

const app = express()

// aktifkan kode dibawah ini dengan menghapus komennya untuk membuat database

// try {
//   await db.sync();
//   console.log("Database synchronized");
// } catch (error) {
//   console.error("Error synchronizing database:", error);
// }

app.use(cors())
app.use(express.json())

app.use(UserRoute)

app.listen(process.env.APP_PORT, () => {
  console.log(`server up and running in port ` + process.env.APP_PORT)
})