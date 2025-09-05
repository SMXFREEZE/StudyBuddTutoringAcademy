
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-0">
      <div className="section-container">
        <p className="text-center text-gray-600 text-sm">
          © 2024 StudyBudd Academy - Montreal, QC. Contact us at{" "}
          <a href="mailto:studybudd.tutoring@gmail.com" className="text-pulse-500 hover:underline">
            studybudd.tutoring@gmail.com
          </a>{" "}
          for all inquiries and bookings.<br />
          <span className="text-xs">© 2024 StudyBudd Academy - Montréal, QC. Contactez-nous à studybudd.tutoring@gmail.com pour toutes demandes et réservations.</span>
        </p>
      </div>
    </footer>;
};
export default Footer;
