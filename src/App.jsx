import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
	return (
		<div className="bg-slate-800">
			<header>
				<Navbar />
			</header>
			<div>
				<Home />
			</div>
		</div>
	);
}

export default App;
