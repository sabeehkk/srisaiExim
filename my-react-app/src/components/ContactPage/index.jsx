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
