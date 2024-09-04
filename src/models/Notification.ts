import mongoose, { Schema, Document } from 'mongoose';

interface INotification extends Document {
  email: string;
  interval: string;
  day: string;
  time: string;
  searchQuery: string;
  relevancyScore: string;
}

const NotificationSchema: Schema = new Schema({
  email: { type: String, required: true },
  interval: { type: String, required: true },
  day: { type: String, required: true },
  time: { type: String, required: true },
  searchQuery: { type: String, required: true },
  relevancyScore: { type: String, required: true },
});

export default mongoose.models.Notification || mongoose.model<INotification>('Notification', NotificationSchema);
