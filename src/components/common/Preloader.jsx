import React from 'react';
import ContentLoader from 'react-content-loader';

export default function Preloader() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="280" rx="10" ry="10" width="280" height="25" />
      <rect x="0" y="324" rx="10" ry="10" width="280" height="85" />
      <rect x="-1" y="425" rx="15" ry="15" width="101" height="30" />
      <rect x="132" y="418" rx="15" ry="15" width="147" height="44" />
    </ContentLoader>
  )
}
