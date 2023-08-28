import '@/styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { ComponentType, ReactElement, ReactNode } from 'react'

const progress = new ProgressBar({
  size: 2,
  color: '#38bdf8',
  className: 'bar-of-progress',
  delay: 100,
})
//checking windows
if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}
//event router
Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.finish())
Router.events.on('routeChangeError', () => progress.finish())
export type NextPageWithLayout<P = { props?: any }> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps,router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return(
      <>
        {getLayout(<Component {...pageProps} />)}
      </>
  )
}
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
