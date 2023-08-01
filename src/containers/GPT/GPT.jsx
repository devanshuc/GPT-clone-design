import { Feature } from "../../components";
import classes from "./Gpt.module.css";

const Gpt = () => {
	return (
		<div className={`${classes.gpt} ${classes.section__margin}`} id="gpt">
			<div className={classes.feature}>
				<Feature />
			</div>
			<div className={classes.heading}>
				<h1>The possibilities are beyond your imagination</h1>
				<p>Explore The Library</p>
			</div>
			<div className={classes.container}>
				<Feature />
				<Feature />
				<Feature />
			</div>
		</div>
	);
};

export default Gpt;
