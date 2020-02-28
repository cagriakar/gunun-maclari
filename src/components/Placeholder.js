import React from "react";
import ContentLoader from "react-content-loader";

function Placeholder() {
  return (
    <ContentLoader
      speed={1}
      width={320}
      height={300}
      viewBox="0 0 320 300"
      backgroundColor="#1cc413"
      foregroundColor="#ffffff"
      backgroundOpacity={0}
      foregroundOpacity={0.6}
    >
      <rect x="60" y="33" rx="3" ry="3" width="200" height="40" />
      <rect x="135" y="127" rx="3" ry="3" width="50" height="24" />
      <rect x="41" y="167" rx="3" ry="3" width="90" height="60" />
      <rect x="140" y="187" rx="3" ry="3" width="40" height="15" />
      <rect x="189" y="167" rx="3" ry="3" width="90" height="60" />
    </ContentLoader>
  );
}

export default Placeholder;
