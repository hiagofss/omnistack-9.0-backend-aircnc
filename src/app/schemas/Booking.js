import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot',
  },
});

export default mongoose.model('Booking', BookingSchema);
