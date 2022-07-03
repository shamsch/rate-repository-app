import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (selected) => {
    let variables = {};

	//clearly i don't understand what ascend and descend mean but it works lol
    if (selected === "ASC") {
        variables = {
            orderBy: "RATING_AVERAGE",
            orderDirection: "DESC",
        };
    } else if (selected === "DESC") {
        variables = {
            orderBy: "RATING_AVERAGE",
            orderDirection: "ASC",
        };
    } else if (selected === "LATEST") {
		variables = {
			orderBy: "CREATED_AT",
			orderDirection: "ASC",
		};
	}

    const res = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
        variables,
    });

    if (res.loading) {
        return { loading: true };
    }
    console.log(res.error);
    return { repositories: res.data.repositories, loading: false };
};

export default useRepositories;
