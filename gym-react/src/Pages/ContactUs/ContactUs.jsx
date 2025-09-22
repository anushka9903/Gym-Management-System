import React from "react";
import ContactCard from "./ContactCard";
import { contactDetails } from "./ContactDetails";

const ContactUs = () => {
  return (
    <div>
      <section class="bg-[#0a0a0a] p-20 text-white">
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
          <div className="flex flex-wrap justify-center gap-5 mt-10">
            {contactDetails.map((item) => (
              <ContactCard item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
