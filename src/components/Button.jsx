import React from "react";

const Button = ({ buttName, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="text-white rounded-xl border-2 bg-transparent border-purple-400 drop-shadow-sm drop-shadow-purple-400 m-2 p-2 hover:bg-purple-400/30 active:drop-shadow-none text-center"
		>
			{buttName}
		</button>
	);
};

export default Button;
