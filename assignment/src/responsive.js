import {css} from "styled-components";

export const mobile = (props) => {
    return css`
    @media(max-width:415px) {
        ${props}
    }
    `;
  };

  export const miniMobile = (props) => {
    return css`
    @media(max-width:380px) {
        ${props}
    }
    `;
  };
  export const tablate = (props) => {
    return css`
    @media only screen and (max-width:720px) {
        ${props}
    }
    `;
  };
  export const maxTablate = (props) => {
    return css`
    @media only screen and (max-width:820px) {
        ${props}
    }
    `;
  };
  export const miniLaptop = (props) => {
    return css`
    @media only screen and (max-width:1123px) {
        ${props}
    }
    `;
  };
  