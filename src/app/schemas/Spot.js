import mongoose from 'mongoose';

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: String,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://127.0.0.1:3333/files/${this.thumbnail}`;
});

export default mongoose.model('Spot', SpotSchema);
