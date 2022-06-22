import { FlatList, View, StyleSheet } from "react-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem ";

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
	const { repositories, loading } = useRepositories();

	if (loading) {
		return <></>;
	}

	console.log(repositories, loading);
	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];

	console.log(repositoryNodes);
	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => <RepositoryItem item={item}></RepositoryItem>}
		/>
	);
};

export default RepositoryList;
