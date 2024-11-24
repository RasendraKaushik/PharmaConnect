import { Grid } from "@mui/material";
import Member from "./Member";

const teamData = [
	{
		name: "Rasendra Kaushik",
		image: "/images/rasendra.jpg",
		title: "Web Developer",
		bio: "I'm a skilled MERN stack developer with expertise in MongoDB, Express, React, and Node.js. Passionate about building dynamic and efficient fullstack web applications.Currently working as a intern at CoRover",
		fb: "https://www.linkedin.com/in/rasendra-kaushik-74b183270/",
		wp: "whatsapp://send?phone=+917042310102",
		gh: "https://github.com/RasendraKaushik",
		email: "rasendra004@gmail.com"
	},
	{
		name: "Tushar Manishi",
		image: "/images/tushar.jpg",
		title: "Cybersecurity Enthusiast",
		bio: "Driven cybersecurity enthusiast dedicated to safeguarding digital landscapes, with a proven track record in identifying vulnerabilities and implementing robust security solutions.",
		fb: "https://www.linkedin.com/in/tushar-manishi-793359167/",
		wp: "whatsapp://send?phone=+919958217944",
		gh: "https://github.com/hitman04",
		email: "tusharmanishi@gmail.com "
	},
	{
		name: "Riya Panwar",
		image: "/images/riya.jpg",
		title: "ML Engineer",
		bio: "Passionate ML engineer committed to advancing the frontier of artificial intelligence, with a proven history of developing innovative algorithms and deploying scalable solutions to tackle complex challenges.",
		fb: "https://www.linkedin.com/in/riya-panwar-276297251/",
		wp: "whatsapp://send?phone=+919027336454",
		gh: "https://github.com/18riya03",
		email: "9922103079@mail.jiit.ac.in "
	},
	{
		name: "Shreya",
		image: "/images/shreya.jpg",
		title: "DevOps Engineer",
		bio: "Passionate DevOps Engineer committed to bridging the gap between development and operations, with a proven track record of designing and implementing efficient CI/CD pipelines, scalable infrastructure, and robust security protocols to drive high-quality software releases and seamless system operations..",
		fb: "https://www.linkedin.com/in/shreya-6658b624a/",
		wp: "whatsapp://send?phone=+919654201698",
		gh: "https://github.com/Bungy-Bears",
		email: "9922103019@mail.jiit.ac.in "
	}
];

const Team = () => {
	return (
		<Grid container spacing="20px" sx={{ padding: { xs: "16px", sm: "20px" } }}>
			{teamData.map((data, i) => (
				<Member key={i} data={data} />
			))}
		</Grid>
	);
};

export default Team;
