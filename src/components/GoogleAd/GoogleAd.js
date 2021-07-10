import React, { useEffect } from "react";

const GoogleAd = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      <ins
        class="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9534755771299362"
        data-ad-slot="6705205382"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAd;
