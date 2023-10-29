/* eslint-disable @next/next/no-img-element */
import { useQuery } from '@apollo/client';
import { GET_GITHUB_PROFILE } from '../../lib/queries';
import apolloClient from '../../lib/apolloClient'; 
import Loading from '../Loading/Loading'; 

function GitHub() {
  const { loading, error, data } = useQuery(GET_GITHUB_PROFILE, {
    client: apolloClient,
  });

  if (loading) return <Loading text="GitHub Data" />;
  if (error) return <p>Error: {error.message}</p>;

  const { viewer } = data;
  const { name, avatarUrl, bio, repositories, contributionsCollection } =
    viewer;

  return (
    <div className="about-page p-6">
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="rounded-full w-24 h-24 mx-auto"
      />
      <h1 className="text-2xl font-bold mt-4">{name}</h1>
      <p className="text-headline mt-2">{bio}</p>

      <h2 className="text-xl font-semibold mt-6 text-headline">GitHub Activity</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <p>Total Commits: {contributionsCollection.totalCommitContributions}</p>
        <p>Total Issues: {contributionsCollection.totalIssueContributions}</p>
        <p>
          Total Pull Requests:{' '}
          {contributionsCollection.totalPullRequestContributions}
        </p>
        <p>
          Total Repositories:{' '}
          {contributionsCollection.totalRepositoryContributions}
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-6 text-headline">Recent Repositories</h2>
      <ul className="list-disc list-inside mt-4">
        {repositories.nodes.map((repo) => (
          <li key={repo.name} className="mt-2">
            <h3 className="font-bold">{repo.name}</h3>
            <p className="text-headline">{repo.description}</p>
            <p className="text-headline text-sm">Forks: {repo.forkCount}</p>
            <p className="text-headline text-sm">
              Updated At: {new Date(repo.updatedAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitHub;
