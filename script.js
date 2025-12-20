function openWhatsApp() {
  const phoneNumber = "819051558548"; // CHANGE to your WhatsApp number
  const message = encodeURIComponent(
    "Hello! I’m interested in booking a Tokyo tour."
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

function sendEmail() {
  const email = "lovelyrica.harada@gmail.com"; // CHANGE to your email
  const subject = encodeURIComponent("Tokyo Tour Inquiry");
  const body = encodeURIComponent(
    "Hello,\n\nI would like to ask about your Tokyo tours.\n\nThank you!"
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
