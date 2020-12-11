import React from 'react';
import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default CustomApp;
