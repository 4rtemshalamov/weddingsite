import { css } from '@emotion/react'

export const styleCount = css`
  .header {
    background: #254864;
    color: white;
    width: 100vw;
    padding: 18px 0;
  }

  .title {
    margin: 0;
  }

  .subtitle {
    max-width: 576px;
    margin: 36px auto;
    letter-spacing: 0.1em;
    line-height: 1.3em;
  }

  .countdown-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 -8px 0 -8px;
  }

  .time-section {
    padding: 0px 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #254864 !important;
  }

  .time {
    margin: 0;
    font-size: 60px !important;
    font-weight: 800 !important;
  }

  .small {
    font-size: 18px !important;
  }
`

export const styWrapperCount = css`
  display: inline-block;
  width: 100px;
  height: 100px;
  background: rgba(241, 78, 149, 0.8);
  margin: 8px;
  border-radius: 50%;
  position: relative;
  animation: pulse 1s ease infinite;
  color: #fff;

  h3 {
    font-size: 30px;
    color: #fff;
    margin: 20px 0 0 0;
  }

  @media screen and (max-width: 500px) {
    width: 75px;
    height: 75px;
    margin: 4px;
    font-size: 12px;

    h3 {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 380px) {
    width: 55px;
    height: 55px;

    h3 {
      margin-top: 12px;
      margin-bottom: -4px;
      font-size: 16px;
    }

    span {
      font-size: 10px;
    }
  }
`
