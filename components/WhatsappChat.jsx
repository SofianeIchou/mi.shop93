import * as React from "react";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

export const WhatsAppChat = () => (
  <WhatsAppWidget
    placeholder="Écrivez votre message"
    phoneNumber="0651960718"
    message="Bonjour, une question ? Rendez-vous sur Whatsapp 😉"
    textReplyTime="Réponse rapide"
    companyName="Mi.Shop93"
    sendButton="Envoyer"
  />
);
