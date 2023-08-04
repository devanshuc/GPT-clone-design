import classes from "./Possibility.module.css";
import logo from "../../assets/possibility.png";

const Possibility = () => {
	return (
		<div className={`${classes.possibility} ${classes.}`}>
			<div className={classes.possibility_logo}>
				<img src={logo} />
			</div>
			<div className={classes.container}>
				<div className={classes.div1}>
					<p>Request Early Access to Get Started</p>
				</div>
				<div className={classes.div2}>
					<h1 className="gradient__text">
						The possibilities are beyond your imagination
					</h1>
					<p>
						Yet bed any for travelling assistance indulgence unpleasing. Not
						thoughts all exercise blessing. Indulgence way everything joy
						alteration boisterous the attachment. Party we years to order allow
						asked of.
					</p>
				</div>
				<div className={classes.div3}>
					<p>Request Early Access to Get Started</p>
				</div>
			</div>
		</div>
	);
};

export default Possibility;
