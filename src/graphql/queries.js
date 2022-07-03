import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query Repository(
        $orderBy: AllRepositoriesOrderBy
        $orderDirection: OrderDirection
        $searchKeyword: String
    ) {
        repositories(
            orderBy: $orderBy
            orderDirection: $orderDirection
            searchKeyword: $searchKeyword
        ) {
            edges {
                node {
                    id
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

export const GET_REPOSITORY = gql`
    query Repository($repositoryId: ID!) {
        repository(id: $repositoryId) {
            url
            ratingAverage
            reviewCount
            stargazersCount
            ownerAvatarUrl
            fullName
            language
            description
            forksCount
            name
            reviews {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
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
