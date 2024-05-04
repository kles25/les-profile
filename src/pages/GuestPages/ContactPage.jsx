import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const validateForm = () => {
        let isValid = true;

        if (!formData.name.trim()) {
            toast.error("Name is required");
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            toast.error("Valid email is required");
            isValid = false;
        }

        if (!formData.subject.trim()) {
            toast.error("Subject is required");
            isValid = false;
        }

        if (!formData.message.trim()) {
            toast.error("Message is required");
            isValid = false;
        }

        return isValid;
    };
    const onSubmit = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            const formData = new FormData(event.target);
            formData.append(
                "access_key",
                "d2b54c26-4011-40a0-a368-1d5ee7ddb2ed"
            );

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            }).then((res) => res.json());

            if (res.success) {
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                toast.success("Form submitted successfully!");
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <div className="section-content-holder">
            <ToastContainer />
            <div className="pages-row">
                <div className="pages-col-4">
                    <div className="title-content">
                        <h1>Contact</h1>
                        <h4>Get in Touch</h4>
                        <p>
                            Ready to start a conversation? Feel free to reach
                            out using the contact information below. Whether you
                            have a project in mind, want to collaborate, or
                            simply have a question, I'm here to help!
                        </p>
                    </div>
                </div>
                <div className="pages-col-8">
                    <div className="main-content-two">
                        <form onSubmit={onSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
