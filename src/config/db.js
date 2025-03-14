import mongoose from 'mongoose';



const connectDB = async () => {
    try {
        await mongoose.connect('');
        console.log('Database connected');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1);
    }
}

export default connectDB;
