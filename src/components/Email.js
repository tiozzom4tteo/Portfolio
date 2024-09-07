import emailjs from "emailjs-com";

export const sendEmail = (ip, location, userAgent) => {
  if (ip || location || userAgent) {
  emailjs
    .send(
      "service_x1a8f8s",
      "template_28qp37c",
      { ip: ip, location: location, userAgent: userAgent },
      "7fy1ZFgME86RqS4mE"
    )
  }
  else{
    emailjs
    .send(
      "service_x1a8f8s",
      "template_28qp37c",
      { ip: "N/A", location: "N/A", userAgent: "N/A" },
      "7fy1ZFgME86RqS4mE"
    )
  }
};
