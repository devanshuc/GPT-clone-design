import classes from "./Features.module.css";

const Features = () => {
	return (
		<div className={`${classes.features} ${classes.section__padding}`}>
			<div className={classes.features_heading}>
				<h1 className="gradient__text">
					The Future is Now and You Just Need to Realize It. Step into Future
					Today. & Make it Happen.
				</h1>
				<p>Request Early Access to Get Started</p>
			</div>
		</div>
	);
};

export default Features;
