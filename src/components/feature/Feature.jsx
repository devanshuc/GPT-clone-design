import classes from "./Feature.module.css";

const Feature = ({ title, text }) => {
	return (
		<div className={classes.feature_container}>
			<div className={classes.title}>
				<div />
				<h1>{title}</h1>
			</div>
			<div className={classes.text}>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Feature;
