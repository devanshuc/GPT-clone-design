import classes from "./Possibility.module.css";
import logo from "../../assets/possibility.png";

const Possibility = () => {
	return (
		<div className={`${classes.possibility} ${classes.section__padding}`}>
			<div className={classes.possibility_image}>
				<img src={logo} />
			</div>
			<div className={classes.container}>
				<p>Request Early Access to Get Started</p>

				<h1 className="gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<p>
					Yet bed any for travelling assistance indulgence unpleasing. Not
					thoughts all exercise blessing. Indulgence way everything joy
					alteration boisterous the attachment. Party we years to order allow
					asked of.
				</p>

				<p>Request Early Access to Get Started</p>
			</div>
		</div>
	);
};

export default Possibility;
