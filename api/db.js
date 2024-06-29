// db.js
import mongoose from 'mongoose';


async function MongoDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mernestate');
    console.log('Connected to MongoDB');
    return true;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    return false;
  }
}

export default MongoDB;
// Export the function
