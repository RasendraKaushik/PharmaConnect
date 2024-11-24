import { Box } from "@mui/material";

const ContactMap = () => {
	return (
		<Box
			component="div"
			sx={{
				padding: {
					xs: "16px",
					sm: "20px 0 20px 20px",
				},
				height: { xs: "350px", sm: "100%" },
			}}
		>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.685942464504!2d77.36284727601337!3d28.519095189222003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce63ce7fae835%3A0x5714a74a5abdf3e6!2sJaypee%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1731649636546!5m2!1sen!2sin"
				style={{
					border: "5px solid #fff",
					borderRadius: "12px",
					boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
				}}
				height="100%"
				width="100%"
				allowFullScreen={true}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</Box>
	);
};

export default ContactMap;
