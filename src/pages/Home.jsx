import { useState } from "react";
import CardHolder from "../components/CardHolder";
import GenreList from "../components/GenreList";
import { gql, useLazyQuery } from "@apollo/client";

const getAnimesByGenre = gql`
	query animesByGenre($id: ID!) {
		genre(id: $id) {
			id
			name
			animes {
				id
				name
			}
		}
	}
`;

const Home = () => {
	const [allAnime, setAllAnime] = useState(false);
	const [
		animesByGenre,
		{ data: dataAnime, loading: loadingAnime, error: errorAnime },
	] = useLazyQuery(getAnimesByGenre);

	if (loadingAnime) return `Loading`;
	if (errorAnime) return `Error Message: ${errorAnime.message}`;

	const handleData = (genreID) => {
		if (genreID) {
			setAllAnime(false);
			animesByGenre({ variables: { id: genreID } });
		} else setAllAnime(true);
	};

	return (
		<div className="text-white">
			{/* Some random suggestions */}
			<CardHolder dataByGenre={dataAnime} allAnime={allAnime} />
			{/* Genres List (try to make expandable) */}
			<GenreList onSettingGenre={handleData} />
		</div>
	);
};

export default Home;
