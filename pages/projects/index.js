import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';

function Projects({ showcaseRepos }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        {showcaseRepos.length > 0 ? (
          showcaseRepos.map((repo) => (
            <div key={repo.id} className="card bordered max-w-md mx-auto my-4">
              <figure>{/* Add image here if available */}</figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{repo.name}</h2>
                <p>{repo.description || 'No description available.'}</p>
                <div className="card-actions">
                  <Link href={repo.html_url}>
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="card bordered max-w-md mx-auto">
            <div className="card-body">
              <h1 className="card-title text-2xl">
                No showcase projects available.
              </h1>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
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
      console.log(showcaseRepos);
    });

    return {
      props: {
        showcaseRepos,
      },
      revalidate: 43200, // Re-generate the page every 12 hours
    };
  } catch (error) {
    console.error('GitHub API request failed:', error);
    return {
      props: {
        showcaseRepos: [],
      },
      revalidate: 43200,
    };
  }
}

export default Projects;
