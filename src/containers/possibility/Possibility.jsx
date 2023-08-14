import classes from "./Possibility.module.css";
import logo from "../../assets/possibility.png";

const Possibility = () => {
	return (
		<div
			className={`${classes.possibility} ${classes.section__padding}`}
			id="possibilty"
		>
			<div className={classes.possibility_image}>
				<img src={logo} />
			</div>
			<div className={classes.content}>
				<a href="https://chat.openai.com/auth/login">Get Started Today</a>

				<h1 className="gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<p>
					Yet bed any for travelling assistance indulgence unpleasing. Not
					thoughts all exercise blessing. Indulgence way everything joy
					alteration boisterous the attachment. Party we years to order allow
					asked of.
				</p>

				<a href="https://chat.openai.com/auth/login">Get Started Today</a>
			</div>
		</div>
	);
};

export default Possibility;
