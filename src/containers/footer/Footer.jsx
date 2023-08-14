import classes from "./Footer.module.css";
import gptLogo from "../../assets/logo.svg";

const Footer = () => {
	return (
		<div className={`${classes.footer} ${classes.section__padding}`}>
			<div className={classes.footer_heading}>
				<h1 className="gradient__text">
					Do you want to step in to the future before others
				</h1>
			</div>

			<div className={classes.footer_btn}>
				<p>Request Early Access</p>
			</div>

			<div className={classes.footer_links}>
				<div className={classes.footer_links_logo}>
					<img src={gptLogo} alt="gpt3_logo" />
					<p>
						Made with Love from from India 🇮🇳
						<br />
						by Devanshu Chicholikar.
					</p>
				</div>
				<div className={classes.footer_links_div}>
					<h4>Links</h4>
					<a href="https://github.com/devanshuc">Github</a>
					<a href="https://twitter.com/Kira_Icarusss">Twitter</a>
					<a href="https://www.linkedin.com/in/devanshuchicholikar/">
						LinkedIn
					</a>
				</div>
				<div className={classes.footer_links_div}>
					<h4>Company</h4>
					<p>Terms & Conditions </p>
					<p>Privacy Policy</p>
					<p>Contact</p>
				</div>
				<div className={classes.footer_links_div}>
					<h4>Get in touch</h4>
					<p>Devanshu Chicholikar</p>
					<p>Tech Enthusiast.</p>
					<p>devanshuchi9@gmail.com</p>
				</div>
			</div>

			<div className={classes.footer_copyright}>
				<p>@2023 GPT-3.5</p>
			</div>
		</div>
	);
};

export default Footer;
