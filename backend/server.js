import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'
import messageRoutes from './routes/message.routes.js'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/user.routes.js'
import dns from "dns";


dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5858

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

const startServer = async () => {
    try {
        await connectToMongoDB()
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    } catch (error) {
        console.log("Failed to start server", error)
    }
}

startServer()
