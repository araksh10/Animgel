import Card from "./Card";
import { gql, useQuery } from "@apollo/client";

const getCardsQuery = gql`
	{
		animes {
			name
			id
		}
	}
`;

const CardHolder = ({ dataByGenre, allAnime }) => {
	const { data, loading, error } = useQuery(getCardsQuery);

	if (loading) return `Loading`;
	if (error) return `Error Message: ${error.message}`;

	return (
		<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 select-none">
			{dataByGenre &&
				!allAnime &&
				dataByGenre.genre.animes.map((anime) => (
					<Card key={anime.id} cardName={anime.name} />
				))}
			{(!dataByGenre || allAnime) &&
				data.animes.map((anime) => (
					<Card key={anime.id} cardName={anime.name} />
				))}
		</div>
	);
};

export default CardHolder;
