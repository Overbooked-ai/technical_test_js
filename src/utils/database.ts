import mongoose from 'mongoose';

const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://localhost:27017/test_db';

export const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};