import { View, Text, Image, StyleSheet, Button } from "react-native";
import React from "react";
import millify from "millify";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";
import { useParams } from "react-router-native";
import {openURL} from 'expo-linking'



const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "lightgray",
        borderRadius: 10,
        padding: 10,
    },
    top: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 14,
        color: "gray",
    },
    tag: {
        fontSize: 14,
        color: "black",
        fontWeight: "bold",
        backgroundColor: "lightblue",
        padding: 2,
        borderRadius: 5,
        marginLeft: 5,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    box: {
        height: 50,
        width: 60,
        marginHorizontal: 15,
        marginTop: 10,
    },
    count: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    },
    boxText: {
        fontSize: 14,
        color: "white",
        fontWeight: "bold",
        marginLeft: 5,
        textAlign: "center",
    },
});

const Repository = () => {
    const {id} = useParams();
    const {data, loading} = useQuery(GET_REPOSITORY, {
        variables: { repositoryId: id },
    })

    if (loading) {
        return <></>;
    }
    const {repository} = data;

    const handlePress = async () => {
        await openURL(repository.url)
    }

    return (
        <View style={styles.container} testID="repoItem">
            <View style={styles.top}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: `${repository.ownerAvatarUrl}`,
                    }}
                />
                {/* this flex shrink makes the text stay within the view which is within the the top view */}
                <View style={{ flexShrink: 1 }}> 
                    <Text style={styles.title}>{repository.fullName}</Text>
                    <Text style={styles.subtitle}>{repository.description}</Text>
                </View>
            </View>

            <View style={{ alignSelf: "flex-start", marginLeft: 60 }}>
                <Text style={styles.tag}>{repository.language}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
                <View style={styles.box} testID="stargazerCount">
                    <Text style={styles.count}>
                        {millify(repository.stargazersCount)}
                    </Text>
                    <Text style={styles.boxText}>Stars</Text>
                </View>
                <View style={styles.box} testID="forksCount">
                    <Text style={styles.count}>{millify(repository.forksCount)}</Text>
                    <Text style={styles.boxText}>Forks</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.count}>
                        {millify(repository.reviewCount)}
                    </Text>
                    <Text style={styles.boxText}>Reviews</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.count}>
                        {millify(repository.ratingAverage)}
                    </Text>
                    <Text style={styles.boxText}>Rating</Text>
                </View>
            </View>

            <Button onPress={handlePress} title="Open in GitHub"/>
            

        </View>
    );
};

export default Repository;
