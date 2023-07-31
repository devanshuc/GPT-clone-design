import classes from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div className={classes.links}>
				<div className={classes.logo}>
					<img src={logo} alt="logo" />
				</div>
				<div className={classes.container}>
					<p>
						<a href="#home">Home</a>
					</p>
					<p>
						<a href="#gpt">What is GPT?</a>
					</p>
					<p>
						<a href="#possibilty">Open AI</a>
					</p>
					<p>
						<a href="#features">Case Studies</a>
					</p>
					<p>
						<a href="#blog">Library</a>
					</p>
				</div>
			</div>
			<div className={classes.signup}>
				<p>Signin</p>
				<button type="button">Signup</button>
			</div>
		</div>
	);
};

export default Navbar;
