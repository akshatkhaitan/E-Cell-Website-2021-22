import formcss from "../../styles/form.module.css";
import formdata from "../../components/formdata";
import Link from "next/link";

export const getStaticPaths = () => {
	const paths = formdata.map((data) => {
		return {
			params: { forms: data.name },
		};
	});
	return {
		paths,
		fallback: false,
	};
};
export const getStaticProps = (context) => {
	const formname = context.params.forms;
	var d = formdata.filter(function (e) {
		return e.name == formname;
	});
	return {
		props: { form: d },
	};
};

function Forms({ form }) {
	return (
		<>
			<div className={formcss.formwrap}>
				<div className={formcss.box}>
					<div className={formcss.insidebox}>
						<div className={formcss.formheading}>{form[0].heading}</div>
						{form[0].inputs.map((data) => (
							<div className={formcss.inputs} key={data.id}>
								<input
									className={formcss.name}
									type={data.type}
									placeholder={data.placeholder}
								/>
							</div>
						))}

						<div className={formcss.buttons}>
							<button className={formcss.signupbutton}>{form[0].button}</button>
						</div>
						<Link href={"/welcome/" + form[0].link}>
							<div className={formcss.link}>{form[0].text}</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Forms;
