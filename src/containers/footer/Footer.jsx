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
						Made with Love by Devanshu Chicholikar, <br /> All Rights Reserved
					</p>
				</div>
				<div className={classes.footer_links_div}>
					<h4>Links</h4>
					<p>Overons</p>
					<p>Social Media</p>
					<p>Counters</p>
					<p>Contact</p>
				</div>
				<div className={classes.footer_links_div}>
					<h4>Company</h4>
					<p>Terms & Conditions </p>
					<p>Privacy Policy</p>
					<p>Contact</p>
				</div>
				<div className={classes.footer_links_div}>
					<h4>Get in touch</h4>
					<p>Crechterwoord K12 182 DK Alknjkcb</p>
					<p>085-132567</p>
					<p>info@payme.net</p>
				</div>
			</div>

			<div className={classes.footer_copyright}>
				<p>@2021 GPT-3. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
