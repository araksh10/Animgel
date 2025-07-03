import Button from "./Button";
import { gql, useQuery } from "@apollo/client";

const getGenreQuery = gql`
	{
		genres {
			name
			id
		}
	}
`;

const GenreList = ({ onSettingGenre }) => {
	const { data, loading, error } = useQuery(getGenreQuery);

	if (loading) return "loading...";
	if (error) return `Error: ${error.message}`;

	const searchByGenre = (genreID) => {
		onSettingGenre(genreID);
	};

	return (
		<div>
			<h3 className="font-bold text-2xl mx-4 mb-4 mt-8">Genres List</h3>
			<div className="">
				<Button onClick={() => searchByGenre()} buttName="All Anime" />
				{/* <Button buttName="Action" />
				<Button buttName="Adventure" />
				<Button buttName="Cars" />
				<Button buttName="Comedy" />
				<Button buttName="Dementia" />
				<Button buttName="Demons" />
				<Button buttName="Drama" />
				<Button buttName="Ecchi" />
				<Button buttName="Fantasy" />
				<Button buttName="Game" />
				<Button buttName="Harem" />
				<Button buttName="Historical" />
				<Button buttName="Horror" />
				<Button buttName="Isekai" />
				<Button buttName="Josei" />
				<Button buttName="Kids" />
				<Button buttName="Magic" />
				<Button buttName="Martial Art" />
				<Button buttName="Mystry" />
				<Button buttName="Psychological" />
				<Button buttName="Romance" />
				<Button buttName="Samurai" />
				<Button buttName="Sci-Fi" />
				<Button buttName="Shoujo" />
				<Button buttName="Shounen" />
				<Button buttName="Slice of Life" />
				<Button buttName="Sports" />
				<Button buttName="Super Natural" />
				<Button buttName="Thriller" />
				<Button buttName="Vampire" /> */}

				{data.genres.map((genre) => (
					<Button
						onClick={() => searchByGenre(genre.id)}
						key={genre.id}
						buttName={genre.name}
					/>
				))}
			</div>
		</div>
	);
};

export default GenreList;
