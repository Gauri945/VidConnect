import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    meetingCode: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const Meeting= mongoose.model("Meeting", meetingSchema);

export {Meeting};
//if we use default mtln=b ek hi chz export 
//direct export se saari chz
