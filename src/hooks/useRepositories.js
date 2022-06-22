import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
	const res = useQuery(GET_REPOSITORIES, {
		fetchPolicy: "cache-and-network",
	});

	if (res.loading) {
		return { loading: true };
	}

	return { repositories: res.data.repositories, loading: false };
};

export default useRepositories;
