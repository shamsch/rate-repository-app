import { FlatList, View, StyleSheet } from "react-native";
import useRepositories from "../hooks/useRepositories";
import SortPicker from "./SortPicker";
import RepositoryItem from "./RepositoryItem ";
import { useState } from "react";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, selected, setSelected }) => {
    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];
	
	

    return (
        <FlatList
		    ListHeaderComponent={<SortPicker selected={selected} setSelected={setSelected}/>}
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item, index }) => (
                <RepositoryItem item={item} key={index}></RepositoryItem>
            )}
        />
    );
};

const RepositoryList = () => {
    const [selected, setSelected] = useState("LATEST");
	const { repositories, loading } = useRepositories(selected);

	console.log(selected)
	if (loading) {
		return <></>;
	}

    return <RepositoryListContainer repositories={repositories} selected={selected} setSelected={setSelected} />;
};

export default RepositoryList;
