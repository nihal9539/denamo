import ContactUs from "@/components/ContactUs";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Leading Builders in Saudi Arabia | Contact Us | Delano",
  description:"Contact Delano Developers, a top construction company in Saudi Arabia. Reach out for inquiries on our residential, commercial, and industrial projects. Our team is here to assist you with expert advice and exceptional service"
};

const ContactPage = () => {
  return (
    <>
      <ContactUs />
    </>
  );
};

export default ContactPage;
