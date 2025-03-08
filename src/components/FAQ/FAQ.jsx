import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is this course for?",
      answer:
        "This course is perfect for beginners, hobbyists, and aspiring digital artists who want to digitally illustrate from scratch. No prior experience required!",
    },
    {
      question: "What tools do I need to take this course?",
      answer:
        "You'll need:\n✅ A tablet (iPad, Wacom, or any drawing tablet)\n✅ A digital art software (Procreate, Photoshop, or Krita)\n✅ An open mind for creativity",
    },
    {
      question: "How long is the course?",
      answer:
        "The course runs for 4 weeks, with step-by-step lessons guiding you from the basics to advanced digital painting techniques.",
    },
    {
      question: "Is this a live or recorded course?",
      answer:
        "The course includes both pre-recorded lessons and live Q&A sessions with industry experts for better interaction and support.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes! After completing the course, you’ll receive a certificate of completion, which can boost your portfolio and career opportunities.",
    },
    {
      question: "Can I monetize my digital art after this course?",
      answer:
        "Absolutely! The course includes a bonus session on freelancing & selling your art so you can start earning right away.",
    },
    {
      question: "What happens if I miss a live session?",
      answer:
        "No worries! All live sessions will be recorded and uploaded to your student dashboard for later viewing.",
    },
    {
      question: "How do I apply the coupon code?",
      answer:
        "Once you sign up, you’ll get 15 minutes to enter a valid coupon code to unlock exclusive bonuses.",
    },
    {
      question: "What if I don’t have a tablet?",
      answer:
        "You can still take the course using a mouse & free digital art software like Krita. However, a tablet is recommended for better results.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "The ₹79 booking fee is non-refundable, but we’re confident you’ll love the course!",
    },
    {
      question: "How do I enroll?",
      answer:
        "Click the 'Enroll Now' button, make the payment, and get instant access to the course materials.",
    },
  ];

  return (
    <div className="faq-container">
      <h2>FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>Q: {faq.question}</span>
            <span className="faq-toggle">
              {openIndex === index ? "▲" : "▼"}
            </span>
          </div>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}

      <button type="button" className="cta-button">
        Book Now at ₹49
      </button>

      <div className="faq-bottom">
        <h3>Ready to Start Your Digital Art Journey?</h3>
        <p>Click below to secure your spot & start creating!</p>
        <button className="enroll-button">Enroll Now</button>
      </div>
    </div>
  );
};

export default FAQ;
