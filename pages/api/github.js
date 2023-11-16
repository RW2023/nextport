const axios = require('axios');

export default async function handler(req, res) {
  try {
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    const reposResponse = await axios.get('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    const data = {
      user: userResponse.data,
      repos: reposResponse.data, // Adjust this based on how you want to present the repo data
    };

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data from GitHub:', error);
    res.status(500).json({ message: error.message });
  }
}
