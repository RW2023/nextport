// pages/api/github.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const githubToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
    const response = await axios.get(
      'https://api.github.com/users/RW2023/repos',
      {
        headers: {
          Authorization: `token ${githubToken}`,
        },
      },
    );

    const showcaseRepos = response.data.filter((repo) => {
      return repo.name.includes('pfsc');
    });

    res.status(200).json(showcaseRepos);
  } catch (error) {
    console.error('GitHub API request failed:', error);
    res.status(error.response?.status || 500).json(error.response?.data || {});
  }
}
