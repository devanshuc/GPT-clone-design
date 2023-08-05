import classes from "./Article.module.css";

// eslint-disable-next-line react/prop-types
const Article = ({ image }) => {
	return (
		<div className={classes.article}>
			<div className={classes.article_image}>
				<img src={image} alt="blog_image" />
			</div>
			<div className={classes.article_content}>
				<div>
					<p>Sept 26, 2021</p>
					<h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
				</div>
				<p>Read Full Article</p>
			</div>
		</div>
	);
};

export default Article;
