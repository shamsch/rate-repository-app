import { View, Text } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { MY_REVIEWS } from "../graphql/queries";
import { RepositoryReview } from "./Repository";

const MyReview = () => {
    const {data, loading} = useQuery(MY_REVIEWS)
    if (loading) {
        return <></>
    }

    console.log()
    return (
        <>
              <RepositoryReview review={data.me.reviews.edges} myReview={true}/> 
        </>
    );
};

export default MyReview;
