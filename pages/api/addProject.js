import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { title, description, stack, github, liveVersion, image } = req.body;

  if (!title || !description || !stack || !github || !liveVersion || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('projects');

    const newProject = {
      title,
      description,
      stack: stack.split(',').map((tech) => tech.trim()), // Converting comma-separated string to array
      github,
      liveVersion,
      image,
    };

    const result = await collection.insertOne(newProject);

    if (result.insertedCount > 0) {
      res.status(201).json({ message: 'Project added successfully' });
    } else {
      res.status(500).json({ error: 'Failed to add project' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Database connection failed' });
  } finally {
    await client.close();
  }
}
