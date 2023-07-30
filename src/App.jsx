import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Article from "./components";
import Navbar from "./components";
import Brand from "./components";
import CTA from "./components";
import Feature from "./components";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Hello World</h1>
			<Article />
			<Navbar />
			<Brand />
			<CTA />
			<Feature />
		</>
	);
}

export default App;
