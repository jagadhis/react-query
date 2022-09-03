import React from 'react'
import { ReactQueryDevtools } from 'react-query-devtools'

export default function _app({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </>
  )
}