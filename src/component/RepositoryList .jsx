import { FlatList, View, StyleSheet, Text } from "react-native";
import useRepositories from "../hooks/useRepositories";
import SortPicker from "./SortPicker";
import RepositoryItem from "./RepositoryItem ";
import { useState } from "react";
import { Search } from "./Search";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
    repositories,
    selected,
    setSelected,
    search,
    setSearch,
}) => {
    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

    return (
        <>
            <FlatList
                ListHeaderComponent={
                    <>
                        <SortPicker
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Search search={search} setSearch={setSearch} />
                    </>
                }
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item, index }) => (
                    <RepositoryItem item={item} key={index}></RepositoryItem>
                )}
            />
        </>
    );
};

const RepositoryList = () => {
    const [selected, setSelected] = useState("LATEST");
    const [search, setSearch] = useState("");
    const [debouncedSearch] = useDebounce(search, 500);

    const { repositories, loading } = useRepositories(
        selected,
        debouncedSearch
    );

    if (loading) {
        return <></>;
    }

    return (
        <RepositoryListContainer
            repositories={repositories}
            selected={selected}
            setSelected={setSelected}
            search={search}
            setSearch={setSearch}
        />
    );
};

export default RepositoryList;
