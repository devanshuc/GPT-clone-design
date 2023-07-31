import { useState } from "react";
import "./App.css";
import Article from "./components";
import Navbar from "./components";
import Brand from "./components";
import CTA from "./components";
import Feature from "./components";

function App() {
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
