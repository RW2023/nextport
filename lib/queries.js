// File: lib/queries.js

import { gql } from '@apollo/client';

// Query to get GitHub profile information
export const GET_GITHUB_PROFILE = gql`
  query {
    viewer {
      name
      avatarUrl
      bio
      repositories(last: 5) {
        nodes {
          name
          description
          forkCount
          updatedAt
        }
      }
      contributionsCollection {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalRepositoryContributions
      }
    }
  }
`;

// Query to get GitHub contribution data
export const GET_CONTRIBUTION_DATA = gql`
  query {
    viewer {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;
