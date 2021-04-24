import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'

export default function GlobalCss() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: mr-eaves-modern, tbcgothic-std, sans-serif;
          font-weight: 800;
          font-style: normal;
          color: #333;
        }
        html {
          visibility: hidden;
          opacity: 0;
          transition: opacity 1s ease;
        }
        html.wf-active {
          visibility: visible;
          opacity: 1;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
      `}
    />
  )
}
