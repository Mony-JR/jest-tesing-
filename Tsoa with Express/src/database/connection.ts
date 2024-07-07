import mongoose from 'mongoose';
import configs from '../utils/config';


const connectDB = async () => {
    try {
        await mongoose.connect(configs.mongodbUrl || '');
        console.log('MongoDB connected...');
    } catch (err) {
        console.log("failed to connect");
        
    }
};

export default connectDB;
