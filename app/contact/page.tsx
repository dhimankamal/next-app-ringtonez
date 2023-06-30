import Breadcrumb from "@lib/components/Breadcrumb";
import ContactForm from "@lib/components/forms/ContactForm";

export default function Contact() {
  
  return (
    <div className="container mx-auto">
      <Breadcrumb
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <ContactForm />
    </div>
  );
}
