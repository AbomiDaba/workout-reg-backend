// imports
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import db from './config/mongoDB.js'
import workoutRoutes from './routes/workoutRoutes.js'
import userRoutes from './routes/userRoutes.js'

// constants
const app = express()
const port = process.env.PORT || 5000


// middleware
app.use(
    cors({
        origin: ["https://localhost:5000", "https://workout-reg.onrender.com"
        ]
    })
)
app.use(express.json())

// routes
app.use('/workouts', workoutRoutes)
app.use('/user', userRoutes)

// listeners
app.listen(port, ()=> {
    db()
    console.log(`Server is running on port: ${port}`)
})
