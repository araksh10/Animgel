import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// Apollo client setup
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="bg-slate-800">
				<header>
					<Navbar />
				</header>
				<div>
					<Home />
				</div>
			</div>
		</ApolloProvider>
	);
}

export default App;
