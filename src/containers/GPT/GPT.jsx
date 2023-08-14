import { Feature } from "../../components";
import classes from "./Gpt.module.css";

const Gpt = () => {
	return (
		<div className={`${classes.gpt} ${classes.section__margin}`} id="gpt">
			<div className={classes.feature}>
				<Feature
					title="What is GPT 3.5"
					text="Imagine ChatGPT 3.5 as a super smart computer program that can understand and generate human-like text. It's like a virtual friend that knows a lot of things and can talk to you about almost anything. People use it to get information, help with writing, or just have fun conversations. It's like having a really clever robot buddy that you can chat with on the computer!"
				/>
			</div>
			<div className={classes.heading}>
				<h1 className="gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<a href="https://chat.openai.com/auth/login">Try Now</a>
			</div>
			<div className={classes.container}>
				<Feature
					title="Personalized Learning Assistant"
					text="ChatGPT can help students learn by answering questions and explaining complex topics in a simple way. It's like having a smart tutor available 24/7, making studying more accessible and fun!"
				/>
				<Feature
					title="Content Generation"
					text="ChatGPT can assist writers, bloggers, and content creators by generating ideas, outlines, or even entire articles. It's like having a co-writer who can brainstorm with you and help you write faster."
				/>
				<Feature
					title="Customer Support and FAQs"
					text="ChatGPT can handle customer queries, provide instant support, and answer frequently asked questions on websites. It's like having a super-fast customer service agent that's available all the time, ensuring a great user experience."
				/>
			</div>
		</div>
	);
};

export default Gpt;
