import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
  });

  try {
    await client.connect();
    const db = client.db('portfolio'); 
    const collection = db.collection('projects');

    const projects = await collection.find({}).toArray();

    return res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Unable to fetch projects' });
  } finally {
    await client.close();
  }
}
