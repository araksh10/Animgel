import Card from "./Card";

const CardHolder = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default CardHolder;
