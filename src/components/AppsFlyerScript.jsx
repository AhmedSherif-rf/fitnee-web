import { useEffect } from "react";

const AppsFlyerScript = () => {
  useEffect(() => {
    // Check if AppsFlyer script is already loaded
    if (window.af) {
      // If already loaded, just send the event
      window.af("send_event", "PageVisit");
      return;
    }

    // Create and inject the AppsFlyer script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      !function(e,t,n,a,s,c){e.AppsFlyerObject=s,e[s]=e[s]||function(){
      (e[s].q=e[s].q||[]).push(arguments)},e[s].l=1*new Date,c=t.createElement(n),
      a=t.getElementsByTagName(n)[0],c.async=1,c.src="https://websdk.appsflyer.com?app_id=307416d1-5598-4fdf-85e8-664689572489",
      a.parentNode.insertBefore(c,a)}(window,document,"script",0,"af");

      af('init', {
        app_id: '307416d1-5598-4fdf-85e8-664689572489',
        web_sdk_version: '1.0.0',
      });

      af('send_event', 'PageVisit');
    `;

    // Add script to head
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default AppsFlyerScript;
