import "./App.css";
import { Blog, Features, Footer, Gpt, Header, Possibility } from "./containers";
import { Brand, CTA, Navbar } from "./components";

function App() {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<Gpt />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
}

export default App;
