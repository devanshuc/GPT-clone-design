import classes from "./CTA.module.css";

const CTA = () => {
	return (
		<div className={`${classes.cta} ${classes.section__margin}`}>
			<div className={classes.cta_content}>
				<p>Request Early Access to Get Started</p>
				<h3>Register today & start exploring the endless possiblities.</h3>
			</div>
			<div className={classes.cta_button}>
				<button>Get Started</button>
			</div>
		</div>
	);
};

export default CTA;
