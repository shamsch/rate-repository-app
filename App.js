import Main from "./src/component/Main";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";

const apolloClient = createApolloClient();

export default function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<NativeRouter>
				<Main />
			</NativeRouter>
		</ApolloProvider>
	);
}
