import Link from 'next/link'

const Honeymoon = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-4 py-4">
        <div className="text-orange-50 underline font-sans">
          <Link href="/">
            <a>See all photos</a>
          </Link>
        </div>
        <div className="grid place-content-center">
          <video controls autoPlay style={{ height: '60vh' }}>
            <source src="https://d3ky03j1n6ly73.cloudfront.net/honeymoon.mov" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  )
}

export default Honeymoon
