import { gql } from "@apollo/client";

export const GET_ACCESS_TOKEN = gql`
	mutation Authenticate($credentials: AuthenticateInput) {
		authenticate(credentials: $credentials) {
			accessToken
		}
	}
`;
