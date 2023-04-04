import React, { useState, useEffect } from "react";
import "./CookiePolicy.scss";
import Button from "components/Button/Button";

export default function CookiePolicy() {
  const [showCookiePolicy, setCookiePolicy] = useState(true);
  useEffect(() => {
    const isCookiePolicyAccepted = window.sessionStorage.getItem(
      "cookiePolicyAccepted"
    );
    if (isCookiePolicyAccepted) {
      setCookiePolicy(false);
    }
  });
  const onCloseClick = () => {
    window.sessionStorage.setItem("cookiePolicyAccepted", "true");
    setCookiePolicy(false);
  };
  if (typeof window === "undefined") return <></>;
  return showCookiePolicy ? (
    <div className="cookie-policy-ctr">
      <div className="cookie-policy">
        <div className="text">
          This site uses non-personal cookies to ensure an optimal experience
          for embedded videos and maps, and for site analytics. We do not use
          any marketing cookies. When you click 'Accept’ you still have full
          control by using your browser settings. By continuing to use this
          site, you agree to the use of cookies.
        </div>
        <div className="button-ctr">
          <Button
            className="accept-btn dark-yellow-background light-purple-hover"
            onClick={onCloseClick}
          >
            I Accept
          </Button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
