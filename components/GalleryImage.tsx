import Image from 'next/image'

const GalleryImage = ({ photo }) => {
  return (
    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded shadow-md shadow-black/25 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
      <Image
        alt=""
        src={`https://d3ky03j1n6ly73.cloudfront.net/${photo}-sm.png`}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={`https://d3ky03j1n6ly73.cloudfront.net/${photo}-blur.png`}
      />
    </div>
  )
}

export default GalleryImage
