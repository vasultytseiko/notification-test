import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await client.connect();
      const db = client.db('notificationApp');
      const collection = db.collection('notifications');

      const notification = req.body;
      await collection.insertOne(notification);

      res.status(200).json({ message: 'Notification settings saved successfully' });
    } catch (error) {
      console.error('Error saving notification:', error);
      res.status(500).json({ message: 'Failed to save notification settings' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
