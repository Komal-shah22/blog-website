// import mongoose from 'mongoose';

// const Schema = new mongoose.Schema({
//     email:{
//         type:String,
//         required:true

//     },
//     date:{
//         type:Date,
//         default:Date.now()
//     }
// })

// const EmailModel = mongoose.model.email || mongoose.model('email',Schema);
// export default EmailModel;




import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Optional: Prevent duplicate email entries
    trim: true,  // Optional: Remove whitespace from email
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Use `mongoose.models` to prevent reinitializing the model
const EmailModel = mongoose.models.email || mongoose.model('email', emailSchema);

export default EmailModel;

