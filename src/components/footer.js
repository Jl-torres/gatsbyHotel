import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const EnlaceHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <footer
        css={css`
          background: #0f0c29; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #24243e,
            #302b63,
            #0f0c29
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #24243e,
            #302b63,
            #0f0c29
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

          margin-top: 5rem;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;
            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            } ;
          `}
        >
          <EnlaceHome to="/">
            <h1>Hotel Gatsby</h1>
          </EnlaceHome>
          <p
            css={css`
              text-align: center;
              color: #fff;
              margin: 0;
              padding: 1rem;
            `}
          >
            Hotel Gatsby. Todos los derechos reservados {year} &copy;
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
