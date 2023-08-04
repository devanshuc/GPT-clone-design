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
				<h4>Request Early Access to Get Started</h4>

				<h1 className="gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<p>
					Yet bed any for travelling assistance indulgence unpleasing. Not
					thoughts all exercise blessing. Indulgence way everything joy
					alteration boisterous the attachment. Party we years to order allow
					asked of.
				</p>

				<h4>Request Early Access to Get Started</h4>
			</div>
		</div>
	);
};

export default Possibility;
