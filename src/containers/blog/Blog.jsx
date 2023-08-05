import { Article } from "../../components";
import classes from "./Blog.module.css";
import Blog1Img from "../../assets/blog01.png";
import Blog2Img from "../../assets/blog02.png";
import Blog3Img from "../../assets/blog03.png";
import Blog4Img from "../../assets/blog04.png";
import Blog5Img from "../../assets/blog05.png";

const Blog = () => {
	return (
		<div className={`${classes.blog} ${classes.section__padding}`} id="blog">
			<div className={classes.blog_heading}>
				<h1 className="gradient__text">
					A lot is happening, We are blogging about it.
				</h1>
			</div>
			<div className={classes.blog_container}>
				<div className={classes.blog_container_A}>
					<Article image={Blog1Img} />
				</div>
				<div className={classes.blog_container_B}>
					<Article image={Blog2Img} />
					<Article image={Blog3Img} />
					<Article image={Blog4Img} />
					<Article image={Blog5Img} />
				</div>
			</div>
		</div>
	);
};

export default Blog;
