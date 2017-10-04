const trackingID = "UA-107444198-1";

// Add Google Global site tag script (analytics)
exports.onRenderBody = ({ setHeadComponents }) =>
  setHeadComponents([
    <script
      async={true}
      src={`https://www.googletagmanager.com/gtag/js?id=${trackingID}`}
    />,
    <script
      key={`google-tag-manager`}
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments)};
gtag('js', new Date());
gtag('config', '${trackingID}');
    `
      }}
    />
  ]);
