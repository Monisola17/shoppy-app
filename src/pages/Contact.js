import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createQuery } from "../features/contact/contactSlice";

const contactSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  email: yup.string().nullable().required("Email Address is Required").email("Invalid email"),
  mobile: yup.string().default('').nullable().required("Mobile Number is Required"),
  comment: yup.string().default('').nullable().required("Comment is Required"),
});

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik ({
    initialValues:{
      name:"",
      mobile:'',
      email:"",
      comment:"",
    },
    validationSchema: contactSchema,
    onSubmit: values => {
      dispatch(createQuery (values))
    },
  });
  return (
    
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <section className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6638225381894!2d3.4597263776856004!3d6.437204907564199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5b317daa6d3%3A0xeb92f93ef439e7ce!2sBisola%20Durosinmi%20Etti%20Dr%2C%20Lekki%20Phase%20I%20106104%2C%20Lekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1694021712898!5m2!1sen!2sng" 
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value = {formik.values.name}
                    />
                    <div className="errors">
                      {
                        formik.touched.name && formik.errors.name
                      }
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value = {formik.values.email}
                    />
                    <div className="errors">
                      {
                        formik.touched.email && formik.errors.email
                      }
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                      name="mobile"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value = {formik.values.mobile}
                    />
                    <div className="errors">
                      {
                        formik.touched.mobile && formik.errors.mobile
                      }
                    </div>
                  </div>
                  <div>
                    <textarea
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                      name="comment"
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      value = {formik.values.comment}
                    ></textarea>
                    <div className="errors">
                      {
                        formik.touched.comment && formik.errors.comment
                      }
                    </div>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                      17a,Durosinmi Etti, <br /> Victoria Island, <br /> Lagos.
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+123-456">123-456</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:shopwus@gmail.com">
                        shopwus@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday – Friday 10 AM – 6 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </section>
    </>
  );
};

export default Contact;