'use client';
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Image from 'next/image';

function GitHub() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/github')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading text="GitHub Data" />;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  const { user, repos } = data;
  const {
    login,
    avatar_url,
    bio,
    html_url,
    public_repos,
    followers,
    following,
  } = user;

  return (
    <div className="about-page p-6">
      <Image
        src={avatar_url}
        alt={`${login}'s avatar`}
        width={200}
        height={200}
        className="rounded-full mx-auto"
      />
      <h1 className="text-2xl font-bold mt-4">{login}</h1>
      <p className="mt-2">{bio || '⬇️See Bio ➡️'}</p>
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn text-blue-500 mt-2"
      >
        View GitHub Profile
      </a>
      <div className="mt-4">
        <p>Public Repositories: {public_repos}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
      </div>
    </div>
  );
}

export default GitHub;
