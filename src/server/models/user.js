import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new Schema({
  name: String,
  phone: String,
  provider: String,
  provider_id: { type: String, unique: true },
  email: { type: String, unique: true },
  photo: String,
  createdAt: { type: Date, default: Date.now },
});

UserSchema.plugin(uniqueValidator);

export default mongoose.model('User', UserSchema);

