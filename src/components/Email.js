import emailjs from "emailjs-com";

export const sendEmail = (ip) => {
  emailjs
    .send(
      "service_x1a8f8s",
      "template_28qp37c",
      { ip: ip },
      "7fy1ZFgME86RqS4mE"
    )
    .then(
      (response) => {
        console.log(
          "Email inviata con successo!",
          response.status,
          response.text
        );
      },
      (error) => {
        console.log("Errore nell'invio dell'email:", error);
      }
    );
};
