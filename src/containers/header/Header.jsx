import classes from "./Header.module.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
	return (
		<div className={`${classes.header} ${classes.section_padding}`} id="home">
			<div className={classes.header_content}>
				<h1 className="gradient__text">
					Let’s Build Something amazing with GPT-3 OpenAI
				</h1>
				<p className="">
					Yet bed any for travelling assistance indulgence unpleasing. Not
					thoughts all exercise blessing. Indulgence way everything joy
					alteration boisterous the attachment. Party we years to order allow
					asked of.
				</p>
				<div className={classes.input}>
					<input type="email" placeholder="Your Email Address"></input>
					<button type="button">Get Started</button>
				</div>

				<div className={classes.people}>
					<img src={people} alt="number of people" />
					<p>1,600 people requested access a visit in last 24 hours</p>
				</div>

				{/* <div className={classes.ai_image}>
					<img src={ai} alt="AI Image" />
				</div> */}
			</div>
		</div>
	);
};

export default Header;
