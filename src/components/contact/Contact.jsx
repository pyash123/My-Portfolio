import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import {useFormik} from "formik";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
import { useContext, useRef, useState } from "react";

 

const Contact = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
    const initialValues = {name:"",phone:"",message:""}


	const validate = (values) => {
		const errors = {}

			if(values.name == ""){
				errors.name = "name is empty";

				}

			if( !values.name.match(/^[A-z]+$/)){
				errors.name = "name is empty";

				}
			if(values.phone.toString().length != 10){
				errors.phone = "invalid phone ";

				}

			if(values.message.length <= 10){
				errors.message = "msg shud be atleast 10 letters";

				}

			return errors;


	}

		const onSubmit = (values) => {
			let data = {"from_name":values.name,"from_phone":values.phone,"message":values.message};
				emailjs.send("service_olishe9","template_ik4q1t3",data,"yQWKDCZ4mPFIXwPHa")
			.then(res => {
					console.log(res)
			alert("we will get back to u");
			formik.resetForm();
				})
			.catch(err => console.log(err))
	}
	
	const formik =useFormik({initialValues,validate, onSubmit})




  

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9819069043
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              yashpandey80330@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Flt no 7 , Shreenagar Thane-W ,WagleEstate 
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form onSubmit = {formik.handleSubmit}>
				<input  style={{backgroundColor: darkMode && "#333"}} type="text" name = "name" placeholder="Enter name"  onChange={formik.handleChange} value = {formik.values.name} onBlur = {formik.handleBlur} />
				
			{formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div>:null}
				<br/><br/>
				<input style={{backgroundColor: darkMode && "#333"}} type="number" name = "phone" placeholder="Enter phone no"  onChange={formik.handleChange} value = {formik.values.phone} onBlur = {formik.handleBlur} />
				
			{formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div>:null}
				<br/><br/>
				<textarea style={{backgroundColor: darkMode && "#333"}}  rows="5" name = "message" placeholder="Enter ur enquiry"  onChange={formik.handleChange} value = {formik.values.message} onBlur = {formik.handleBlur} />
			{formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div>:null}
				<br/><br/>
				<button>Submit</button>
				</form>
         
        </div>
      </div>
    </div>
  );
};

export default Contact;