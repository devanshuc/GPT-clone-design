import classes from "./Features.module.css";
import { Feature } from "../../components";

const Features = () => {
	return (
		<div
			className={`${classes.section__padding} ${classes.features}`}
			id="features"
		>
			<div className={`${classes.features_content}`}>
				<h1 className="gradient__text">
					The Future is Now and You Just Need to Realize It. Step into Future
					Today. & Make it Happen.
				</h1>
				<a href="https://chat.openai.com/auth/login">Try Now!</a>
			</div>
			<div className={classes.container}>
				<Feature
					title="Instant Creative Writing Buddy"
					text="Even if you're not a professional writer, ChatGPT can help you come up with creative stories, poems, or even write heartfelt messages. It's like having a friendly muse that inspires you whenever you need it."
				/>
				<Feature
					title="Virtual Study Partner"
					text="Whether you're a student or just curious, ChatGPT can explain complex topics in simple terms. It's like having a knowledgeable friend who can help you understand things you've always wondered about."
				/>
				<Feature
					title="Easy Decision Maker"
					text="When you're unsure about a choice, ChatGPT can give you advice and help you weigh the pros and cons. It's like having a wise friend who can guide you through tough decisions."
				/>
				<Feature
					title="Fun Conversational Companion"
					text="Sometimes you just want to chat or have a fun debate. ChatGPT can engage in lighthearted conversations, tell jokes, and discuss interesting topics. It's like having an entertaining buddy to chat with whenever you're bored."
				/>
			</div>
		</div>
	);
};

export default Features;
