// import { useState } from "react";
// import { Phone, Mail, MapPin, Loader2, Send, CheckCircle } from "lucide-react";
// import { PRIMARY_COLOR, ACCENT_COLOR, TEAL } from "@/lib/constants";
// import SectionWrapper from "@/components/SectionWrapper";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     location: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus("sending");
//     setTimeout(() => {
//       console.log("Form Submitted:", formData);
//       setStatus("success");
//       setTimeout(() => {
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           location: "",
//           message: "",
//         });
//         setStatus("");
//       }, 3000);
//     }, 1500);
//   };

//   return (
//     <SectionWrapper id="contact-page" className="bg-gray-100">
//       <div className="text-center mb-12">
//         <p
//           className="text-sm font-semibold uppercase tracking-wider mb-2"
//           style={{ color: TEAL }}
//         >
//           Get in touch
//         </p>
//         <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//           Ready to Ship? <span style={{ color: PRIMARY_COLOR }}>Contact Us</span>
//         </h2>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           Let's discuss your freight forwarding and logistics needs today.
//         </p>
//       </div>

//       <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//         {/* Contact Form */}
//         <div className="p-8 bg-white rounded-xl shadow-2xl">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {["name", "email", "phone", "location"].map((field) => (
//               <div key={field}>
//                 <label
//                   htmlFor={field}
//                   className="block text-sm font-medium text-gray-700 capitalize"
//                 >
//                   {field === "location"
//                     ? "Origin/Destination (City/Port)"
//                     : field === "phone"
//                     ? "Phone Number"
//                     : field === "email"
//                     ? "Email Address"
//                     : "Full Name"}
//                 </label>
//                 <input
//                   type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
//                   name={field}
//                   id={field}
//                   value={formData[field]}
//                   onChange={handleChange}
//                   required={["name", "email", "message"].includes(field)}
//                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary transition"
//                   style={{ "--primary": PRIMARY_COLOR }}
//                 />
//               </div>
//             ))}

//             {/* Message box */}
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Your Inquiry/Cargo Details
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 rows="4"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary transition"
//                 style={{ "--primary": PRIMARY_COLOR }}
//               ></textarea>
//             </div>

//             {status === "success" && (
//               <div className="flex items-center p-3 text-sm font-medium text-green-700 bg-green-100 rounded-lg">
//                 <CheckCircle className="w-5 h-5 mr-2" />
//                 Your message has been sent successfully! We will respond shortly.
//               </div>
//             )}

//             <button
//               type="submit"
//               disabled={status === "sending" || status === "success"}
//               className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg shadow-lg text-white transition duration-300 ${
//                 status === "sending" || status === "success"
//                   ? "opacity-60 cursor-not-allowed"
//                   : "hover:scale-[1.01] hover:shadow-xl"
//               }`}
//               style={{
//                 backgroundColor: status === "success" ? "#10B981" : PRIMARY_COLOR,
//               }}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.backgroundColor =
//                   status === "success" ? "#059669" : TEAL)
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.backgroundColor =
//                   status === "success" ? "#10B981" : PRIMARY_COLOR)
//               }
//             >
//               {status === "sending" ? (
//                 <>
//                   <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                   Sending...
//                 </>
//               ) : status === "success" ? (
//                 <>
//                   <CheckCircle className="w-5 h-5 mr-2" />
//                   Message Sent!
//                 </>
//               ) : (
//                 <>
//                   Send Inquiry <Send className="w-4 h-4 ml-2" />
//                 </>
//               )}
//             </button>
//           </form>
//         </div>

//         {/* Contact Info */}
//         <div
//           className="space-y-8 p-8 lg:p-10 rounded-xl shadow-inner border-t-4"
//           style={{ borderColor: PRIMARY_COLOR, backgroundColor: "#FFFFFF" }}
//         >
//           <h3 className="text-3xl font-bold text-gray-900 mb-6">
//             Our Contact Details
//           </h3>

//           <div className="flex items-start space-x-4">
//             <Phone className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: TEAL }} />
//             <div>
//               <p className="text-sm font-medium text-gray-500 uppercase">Call Us</p>
//               <a
//                 href="tel:+919945242861"
//                 className="text-lg font-semibold text-gray-800 hover:text-primary transition"
//                 style={{ color: PRIMARY_COLOR }}
//               >
//                 +91 9945242861
//               </a>
//               <p className="text-sm text-gray-600">Mon - Sat, 9:00 AM - 6:00 PM IST</p>
//             </div>
//           </div>

//           <div className="flex items-start space-x-4">
//             <Mail className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: TEAL }} />
//             <div>
//               <p className="text-sm font-medium text-gray-500 uppercase">Email Us</p>
//               <a
//                 href="mailto:sales@srisaiexim.in"
//                 className="text-lg font-semibold text-gray-800 hover:text-primary transition"
//                 style={{ color: PRIMARY_COLOR }}
//               >
//                 sales@srisaiexim.in
//               </a>
//               <p className="text-sm text-gray-600">We aim to respond within 24 hours.</p>
//             </div>
//           </div>

//           <div className="flex items-start space-x-4">
//             <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: TEAL }} />
//             <div>
//               <p className="text-sm font-medium text-gray-500 uppercase">
//                 Our Location
//               </p>
//               <p className="text-lg font-medium text-blue-800">
//                 No. 310, F Block,10TH Cross, Sahakaranagar,Bengaluru - 560092
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// };

// export default ContactPage;


import { useState,useRef } from "react";
import { Phone, Mail, MapPin, Loader2, Send, CheckCircle } from "lucide-react";
import { PRIMARY_COLOR, ACCENT_COLOR, TEAL } from "@/lib/constants";
import SectionWrapper from "@/components/SectionWrapper";
import emailjs from "@emailjs/browser";


const ContactPage = () => {
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const formRef = useRef() ;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage("");
    setPhoneError("");
    // console.log(,'how to debug incoming credential')

    const phoneNumber = formRef.current.user_phone.value;

    if (phoneNumber.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits.");
      // toast.error("Phone number must be exactly 10 digits");
      alert("Phone number must be exactly 10 digits ");
      setIsSending(false);
      return;
    }

    try {
      console.log({
      serviceID: "service_8nq6vz5",
      templateID: "template_4r1jjs9",
      publicKey: "-OWLcmXwwZdtEPbAO",
      form: formRef.current,
    });

      // const response = await emailjs.sendForm(
      //   // "service_8nq6vz5",
      //   "service_8nq6vz5",
      //   "template_4r1jjs9",
      //   formRef.current,
      //   { publicKey: "-OWLcmXwwZdtEPbAO" }
      // );
          // const response = await emailjs.sendForm(
          //     "service_8nq6vz5",
          //     "template_4r1jjs9",
          //     formRef.current,
          //     "-OWLcmXwwZdtEPbAO"
          //   );

          const response = await emailjs.sendForm(
        "service_3usulif",       // your service ID
        "template_960roqo",      // your template ID
        formRef.current,
        "-OWLcmXwwZdtEPbAO"      // your PUBLIC key
      );

      if (response.status === 200) {
        alert("Message sent successfully");
        setSuccessMessage("Message sent successfully!");
        formRef.current.reset();
      } else {
        throw new Error("Failed to send message.");
      }

      if (response.status === 200) {
        alert("Message sent successfully");
        setSuccessMessage("Message sent successfully!");
        formRef.current.reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      alert("Failed to send the message. Please try again later.");
      setSuccessMessage("Failed to send the message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <SectionWrapper id="contact-page" className="bg-gray-100" >
      <div className="text-center mb-12">
        <p
          className="text-sm font-semibold uppercase tracking-wider mb-2"
          style={{ color: TEAL }}
        >
          Get in touch
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Ready to Ship? <span style={{ color: PRIMARY_COLOR }}>Contact Us</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Let's discuss your freight forwarding and logistics needs today.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        
    <div className="flex-1 w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg border border-blue-300">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="user_name"
            placeholder="Enter Name"
            className="w-full py-3 px-4 border border-blue-300 rounded focus:ring-2 focus:ring-blue-400 text-black"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            className="w-full py-3 px-4 border border-blue-300 rounded focus:ring-2 focus:ring-blue-400 text-black"
            required
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Enter Subject"
          className="w-full py-3 mb-4 px-4 border border-blue-300 rounded focus:ring-2 focus:ring-blue-400 text-black"
          required
        />

        <input
          type="tel"
          name="user_phone"
          placeholder="Enter Phone Number"
          className="w-full py-3 mb-4 px-4 border border-blue-300 rounded focus:ring-2 focus:ring-blue-400 text-black"
          required
        />

        <textarea
          name="message"
          placeholder="Enter Message"
          className="w-full py-3 px-4 mb-4 border border-blue-300 rounded focus:ring-2 focus:ring-blue-400 text-black"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white  text-lg font-semibold py-3 rounded-md shadow hover:bg-blue-500 transition"
          disabled={isSending}
          style={{backgroundColor:"rgb(0, 71, 171)"}}
        >
          {isSending ? "Sending..." : "Let's talk"}
        </button>
      </form>

      {successMessage && (
        <p className="mt-4 text-center text-green-600 font-medium">
          {successMessage}
        </p>
      )}
    </div>
    
        {/* Contact Info */}
        <div
          className="space-y-8 p-8 lg:p-10 rounded-xl shadow-inner border-t-4"
          style={{ borderColor: PRIMARY_COLOR, backgroundColor: "#FFFFFF" }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Our Contact Details
          </h3>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: TEAL }} />
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase">Call Us</p>
              <a
                href="tel:+919972314988"
                className="text-lg font-semibold text-gray-800 hover:text-primary transition"
                style={{ color: PRIMARY_COLOR }}
              >
                +91 9972314988
              </a>
              <p className="text-sm text-gray-600">Mon - Sat, 9:00 AM - 6:00 PM IST</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: TEAL }} />
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase">Email Us</p>
              <a
                href="mailto:sales@srisaiexim.in"
                className="text-lg font-semibold text-gray-800 hover:text-primary transition"
                style={{ color: PRIMARY_COLOR }}
              >
                sales@srisaiexim.in
              </a>
              <p className="text-sm text-gray-600">We aim to respond within 24 hours.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: TEAL }} />
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase">
                Our Location
              </p>
              <p className="text-lg font-medium text-blue-800">
                No. 310, F Block,10TH Cross, Sahakaranagar,Bengaluru - 560092
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactPage;