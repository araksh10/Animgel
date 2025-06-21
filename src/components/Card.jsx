import Image from "../assets/one-piece.jpg";

const Card = () => {
	return (
		<div className=" max-w-[340px] min-w-[170px] h-60 m-2 bg-neutral-700 rounded hover:scale-105 hover:z-10">
			<div className="drop-shadow-md drop-shadow-black/50 h-50 border-b-12 border-purple-400 rounded-t overflow-hidden">
				<img src={Image} className="h-full w-full" />
			</div>
			<h3 className="font-bold text-center text-white">One Piece</h3>
		</div>
	);
};

export default Card;
