import { GET_ACCESS_TOKEN } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
export const useSignIn = () => {
	const [mutate, result] = useMutation(GET_ACCESS_TOKEN);

	const signIn = async ({ username, password }) => {
		return await mutate({
			variables: {
				credentials: {
					username,
					password,
				},
			},
		});
	};

	return [signIn, result];
};
