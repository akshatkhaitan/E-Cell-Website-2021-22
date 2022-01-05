import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Container, Grid } from "@mui/material";
import TextfieldWrapper from "./TextField/index.js";
import { useState } from "react";
import { StylesContext } from "@mui/styles";
import styles from "../../styles/GR/Gr.module.css";
import { axios } from "axios";

import formcss from "../../styles/form.module.css";
function FormBP() {
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		team_members: "",
		college: "",
		startup_name: "",
		startup_description: "",
	});

	const INITIAL_VALUES = {
		name: "",
		email: "",
		phone: "",
		team_members: "",
		college: "",
		startup_name: "",
		startup_description: "",
	};
	const FORM_VALIDATION_SCHEMA = Yup.object().shape({
		name: Yup.string().required("Name is required"),
		email: Yup.string().email("Invalid email").required("Email is required"),
		phone: Yup.number()
			.integer()
			.typeError("Invalid phone number")
			.required("Phone is required"),
		team_members: Yup.string().required("Team Members is required"),
		college: Yup.string(),
		startup_name: Yup.string().required("Startup Name is required"),
		startup_description: Yup.string().required(
			"Startup Description is required"
		),
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetch("https://api.apispreadsheets.com/data/JSyySOq10ysctxu3/",
		{
			method: 'POST',
			body: JSON.stringify({"data": data}),
		})
			.then((res) => {
				alert("Form Data Submitted :)");
			})
			.catch((err) => {
				alert("Form Data Not Submitted :( . Please Try Again");
			});
		setData({ ...data, ...INITIAL_VALUES });
	};

	return (
		<>
			{/* <div className={styles.form}>
				<Formik
					initialValues={{
						...INITIAL_VALUES,
					}}
					validationSchema={FORM_VALIDATION_SCHEMA}
					onSubmit={(values, e) => {
						handleSubmit(values);
					}}
				>
					<Form>
						<Container maxWidth="md">
							<Grid>
								<Grid item xs={12}>
									<TextfieldWrapper
										name="name"
										label="Name"
										value={data.name}
										onChange={(e) => {
											setData({ ...data, name: e.target.value });
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextfieldWrapper
										name="email"
										label="Email"
										value={data.email}
										onChange={(e) => {
											setData({ ...data, email: e.target.value });
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextfieldWrapper
										name="phone"
										label="Phone"
										value={data.phone}
										onChange={(e) => {
											setData({ ...data, phone: e.target.value });
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextfieldWrapper
										name="team_members"
										label="Team Members"
										multiline={true}
										value={data.name}
										onChange={(e) => {
											setData({ ...data, team_members: e.target.value });
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextfieldWrapper
										name="college"
										label="College"
										value={data.college}
										onChange={(e) => {
											setData({ ...data, college: e.target.value });
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextfieldWrapper
										name="startup_name"
										label="Startup Name"
										value={data.startup_name}
										onChange={(e) => {
											setData({ ...data, startup_name: e.target.value });
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextfieldWrapper
										name="startup_description"
										label="Startup Description"
										multiline={true}
										value={data.startup_description}
										onChange={(e) => {
											setData({ ...data, startup_description: e.target.value });
										}}
									/>
								</Grid>
								<Button type="submit" variant="contained" color="primary">
									Register
								</Button>
							</Grid>
						</Container>
					</Form>
				</Formik>
			</div> */}

			<div className={formcss.formwrap}>
				<div className={formcss.box}>
					<form
						onSubmit={(e) => {
							handleSubmit(e);
						}}
					>
						<div className={formcss.insidebox}>
							<div className={formcss.formheading}>REGISTER HERE</div>
							<input
								className={formcss.name}
								name="name"
								type="text"
								placeholder="Name"
								value={data.name}
								onChange={(e) => {
									setData({ ...data, name: e.target.value });
								}}
							/>
							<input
								className={formcss.name}
								type="email"
								name="email"
								placeholder="Email"
								value={data.email}
								onChange={(e) => {
									setData({ ...data, email: e.target.value });
								}}
							/>
							<input
								className={formcss.name}
								type="text"
								name="phone"
								placeholder="Contact Number"
								value={data.phone}
								onChange={(e) => {
									setData({ ...data, phone: e.target.value });
								}}
							/>
							<textarea
								className={formcss.name}
								type="text"
								name="team_members"
								style={{ height: "100px" }}
								placeholder="Team Members"
								value={data.team_members}
								onChange={(e) => {
									setData({ ...data, team_members: e.target.value });
								}}
							/>
							<input
								className={formcss.name}
								type="text"
								name="college"
								placeholder="College"
								value={data.college}
								onChange={(e) => {
									setData({ ...data, college: e.target.value });
								}}
							/>
							<input
								className={formcss.name}
								type="text"
								name="startup_name"
								placeholder="Startup Name"
								value={data.startup_name}
								onChange={(e) => {
									setData({ ...data, startup_name: e.target.value });
								}}
							/>
							<textarea
								className={formcss.name}
								type="text"
								name="startup_description"
								placeholder="Startup Description"
								value={data.startup_description}
								style={{ height: "100px" }}
								onChange={(e) => {
									setData({ ...data, startup_description: e.target.value });
								}}
							/>
						<div className={formcss.buttons}>
							<button className={formcss.registerbutton} type="submit">
								Register
							</button>
						</div>
						</div>

					</form>
				</div>
			</div>
		</>
	);
}

export default FormBP;
