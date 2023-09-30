// pages/projects/index.js
import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

function Projects({ showcaseRepos }) {
  return (
    <>
      <Navbar style={{ zIndex: 1 }} />
      <div>
        <div className="container mx-auto p-4">
          <div className="card bordered max-w-md mx-auto">
            <figure>
              <Image
                src="/img/placeholder.jpg"
                alt="Placeholder"
                width={500}
                height={300}
              />
            </figure>
            <div className="card-body ">
              <h1 className="card-title text-2xl">Projects Coming Soon!</h1>
              <p>
                We're working hard to list all the cool projects here. Stay
                tuned!
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Stay Updated</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
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
