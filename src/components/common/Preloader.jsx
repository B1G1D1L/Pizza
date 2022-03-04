import React from 'react';
import ContentLoader from 'react-content-loader';

export default function Preloader() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={453}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="125" r="125" />
      <rect x="0" y="270" rx="10" ry="10" width="280" height="23" />
      <rect x="0" y="315" rx="10" ry="10" width="280" height="83" />
      <rect x="0" y="425" rx="15" ry="15" width="101" height="30" />
      <rect x="151" y="418" rx="22" ry="21" width="129" height="42" />
    </ContentLoader>
  )
}
