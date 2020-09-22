import React, { useEffect } from "react";

declare global {
  interface Window {
    kommunicate: any;
  }
}
interface ChatbotProps { }
const Chatbot: StorefrontFunctionComponent<ChatbotProps> = ({ }) => {
  useEffect(() => {
    obtenhaConfig();
  }, []);

  function obtenhaConfig() {
    (function (_, m) {
      var kommunicateSettings =
        { "appId": "367b216fafeb96f45e0ccb589d128adef", "popupWidget": true, "automaticChatOpenOnNavigation": true };
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  return <div></div>;
};

Chatbot.schema = {
  title: "editor.chatbot.title",
  description: "editor.chatbot.description",
  type: "object",
  properties: {},
};

export default Chatbot;