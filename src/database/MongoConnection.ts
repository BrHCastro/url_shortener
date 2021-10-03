import mongoose from 'mongoose'
require('dotenv').config()

class MongoConnection {
  public async connect (): Promise<void> {
    try {
      await mongoose.connect(process.env.MONGO_CONNECTION)
      console.log('Connect successfully!')
    } catch (error) {
      console.error(error.message)
      process.exit(1)
    }
  }
}

export default MongoConnection
