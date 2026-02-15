"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0FZF7KXYRH"
        strategy="afterInteractive"
      />
      <Script id="ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('js', new Date());
          gtag('config', 'G-0FZF7KXYRH', {
            debug_mode: true
          });

          gtag('event', 'page_view', { debug_mode: true });
        `}
      </Script>
    </>
  );
}
