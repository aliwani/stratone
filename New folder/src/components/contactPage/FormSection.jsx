import React from "react";
import SectionHeader from "../resuables/SectionHeader";
import Form from "../Form";
import ContactInfo from "./ContactInfo";

function FormSection() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-15 md:gap-20">
      <SectionHeader Num="[01]" Text="get in touch" />
      <div className="flex flex-col-reverse md:flex-row justify-between gap-10">
        <ContactInfo/>
        <Form/>
      </div>
    </div>
  );
}

export default FormSection;
