import { Global } from "@emotion/react";
import React from "react";

const Fonts = () => {
  return (
    <Global
      styles={`
      @font-face {
        font-family: 'Giphurs';
        src: url('/type/Giphurs-Regular.woff2') format('woff2'),
             url('/type/Giphurs-Regular.woff2') format('woff');
      }
       }`}
    />
  );
};

export default Fonts;

// @font-face {
//   font-family: 'Inter';
//   src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap');
//   font-weight: 800;
//   font-weight: 400;
// }
// @font-face {
//   font-family: 'Work Sans';
//   src: url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
//   font-weight: 500;
// }
// @font-face {
//   font-family: 'Open Sans';
//   src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;800&display=swap');
//   font-weight: 500;
//
