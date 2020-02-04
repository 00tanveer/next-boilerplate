import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #000;
    font-family: 'Space Mono', monospace;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    backgroundColor: '#000'
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
