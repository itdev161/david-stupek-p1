import mongoose from 'mongoose';
import config from 'config';

// Get the connection String 
const db = config.get('mongoURI');

//Connect to Mongo DB
const connectDatabase = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('You connected to the MongoDB David :D');
    } catch (error){
        console.error(error.message);
    
        // Exit with failure code$ lsof -i :3000
        process.exit(1);
    }
};

export default connectDatabase;