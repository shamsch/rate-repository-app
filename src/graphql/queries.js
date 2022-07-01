import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query Repository {
        repositories {
            edges {
                node {
                    reviewCount
                    stargazersCount
                    ownerAvatarUrl
                    description
                    name
                    forksCount
                    ratingAverage
                    language
                    fullName
                }
            }
        }
    }
`;

export const LOGIN_STATUS = gql`
    query Me {
        me {
            id
            username
        }
    }
`;
