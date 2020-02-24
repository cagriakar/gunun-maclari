import React from "react";
import ContentLoader from "react-content-loader";

function Placeholder() {
  return (
    <ContentLoader
      speed={1}
      width={320}
      height={460}
      viewBox="0 0 320 460"
      backgroundColor="#1cc413"
      foregroundColor="#ffffff"
      backgroundOpacity={0}
      foregroundOpacity={0.6}
    >
      <rect x="66" y="15" rx="3" ry="3" width="161" height="25" />
      <rect x="115" y="71" rx="3" ry="3" width="66" height="14" />
      <rect x="48" y="97" rx="3" ry="3" width="60" height="43" />
      <rect x="129" y="114" rx="3" ry="3" width="35" height="7" />
      <rect x="121" y="150" rx="3" ry="3" width="53" height="11" />
      <rect x="187" y="97" rx="3" ry="3" width="60" height="43" />
      <rect x="114" y="205" rx="3" ry="3" width="66" height="14" />
      <rect x="48" y="236" rx="3" ry="3" width="60" height="43" />
      <rect x="189" y="235" rx="3" ry="3" width="60" height="43" />
      <rect x="130" y="254" rx="3" ry="3" width="35" height="7" />
      <rect x="122" y="294" rx="3" ry="3" width="53" height="11" />
    </ContentLoader>
  );
}

export default Placeholder;
