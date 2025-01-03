import mongoose from 'mongoose';

export const ConnectDB = async ()=>{
   await mongoose.connect('mongodb+srv://komal:007007007@cluster0.xb6w9.mongodb.net/blog-app')
   console.log('DB Connected');
}