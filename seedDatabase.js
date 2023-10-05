require('dotenv').config();
const { MongoClient } = require('mongodb');

require('dotenv').config();
const { MongoClient } = require('mongodb');

async function seedDatabase() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db('your-db-name');
    const collection = db.collection('projects');

    const projects = [
      {
        title: 'Tip Calculator',
        description: 'This is a description.',
        stack: ['HTML', 'CSS', 'JS'],
        // ... other fields
      },
      // ... other projects
    ];

    await collection.insertMany(projects);
    console.log('Data seeded successfully');
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

seedDatabase().catch(console.error);
