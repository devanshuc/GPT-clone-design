import classes from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Menu = () => {
	return (
		<>
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
		</>
	);
};

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className={classes.navbar}>
			<div className={classes.links}>
				<div className={classes.logo}>
					<img src={logo} alt="logo" />
				</div>
				<div className={classes.container}>
					<Menu />
				</div>
			</div>
			<div className={classes.signup}>
				<p>Signin</p>
				<button type="button">Signup</button>
			</div>
			<div className={classes.menu}>
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={26}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={26}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div
						className={`${classes.menu_container} ${classes.scale_up_center}`}
					>
						<div className={classes.mobile_menu_link}>
							<Menu />
						</div>
						<div className={classes.mobile_signup}>
							<p>Sign In</p>
							<button type="button">Sign Up</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
