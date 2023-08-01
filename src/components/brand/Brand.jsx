import classes from "./Brand.module.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

const Brand = () => {
	return (
		<div className={classes.brand}>
			<div>
				<img src={google} alt="google-logo" />
			</div>
			<div>
				<img src={slack} alt="slack-logo" />
			</div>
			<div>
				<img src={atlassian} alt="atlassian-logo" />
			</div>
			<div>
				<img src={dropbox} alt="dropbox-logo" />
			</div>
			<div>
				<img src={shopify} alt="shopify-logo" />
			</div>
		</div>
	);
};

export default Brand;
