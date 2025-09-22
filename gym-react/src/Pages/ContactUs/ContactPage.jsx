import React from "react";
import "./Contact.css";
import ContactUs from "./ContactUs";
import ContactCard from "./ContactCard";
import { contactDetails } from "./ContactDetails";

const ContactPage = () => {
  return (
    <div className="contactContainer h-screen w-full flex justify-center items-center lg:px-20 ">
      <section class="bg-[#0a0a0a] bg-opacity-70 p-20 text-white rounded-md">
        <div class="">
          <div class="">
            <div class="">
              <div class="section-title text-center space-y-2">
                <p className=" text-xl text-orange-500 font-bold tracking-wider">
                  Contact us?
                </p>
                <h2 className="text-3xl font-bold">Get In Touch</h2>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-10">
          {contactDetails.map((item) => (
              <ContactCard item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
