import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'CatchyMager';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./CatchyMager-Normal.woff2') format('woff2'), url('./CatchyMager-Normal.woff') format('woff');
      }
      /* latin */
      @font-face {
        font-family: 'Orchidea';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./OrchideaPro-ExtraLight.woff2') format('woff2'), url('./OrchideaPro-ExtraLight.woff') format('woff');
      `}
  />
)

export default Fonts
