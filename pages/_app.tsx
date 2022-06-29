import Head from 'next/head'
import Link from 'next/link'

import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Amara & Dylan&apos;s Wedding Pictures</title>
      </Head>
      <div className="bg-black/20 relative min-h-screen">
        <div className="py-4 bg-cover space-y-2 text-center shadow-xl shadow-black/50 text-orange-100 bg-black/40 backdrop-blur-sm sticky top-0 z-50">
          <Link href="/">
            <a className="block">
              <div className="text-2xl sm:text-4xl">Amara & Dylan</div>
              <div className="text-md sm:text-xl text-orange-100">
                <span className="text-lg pr-1 italic">Married on</span>
                <span className="font-semibold">May 27, 2022</span>
                <span className="text-ls px-1.5 italic">at</span>
                <span className="font-semibold">The Market at Grelen</span>
              </div>
            </a>
          </Link>
        </div>
        <div className="shadow-lg">
          <Component {...pageProps} />
        </div>
        <div className="bg-black/20 text-orange-100">
          <div className="container mx-auto px-8 py-4 flex flex-row justify-between text-sm">
            <div className="flex flex-row space-x-8">
              <div>
                Photography by{' '}
                <a href="https://instagram.com/rtp_images_" className="underline">
                  RTP Images, llc.
                </a>
              </div>
              <div>
                Website by{' '}
                <a href="https://dt.engineering" className="underline">
                  Dylan Taylor
                </a>
              </div>
            </div>
            <div>Copyright &copy; 2022</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
