import CardHolder from "../components/CardHolder";
import GenreList from "../components/GenreList";

const Home = () => {
	return (
		<div className="text-white">
			{/* Some random suggestions */}
			<CardHolder />
			{/* Genres List (try to make expandable) */}
			<GenreList />
		</div>
	);
};

export default Home;
