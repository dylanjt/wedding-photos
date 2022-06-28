import Link from 'next/link'
import { useRouter } from 'next/router'

import GalleryImage from './GalleryImage'
import GalleryModal from './GalleryModal'

import photos from '../photos.json'

const Gallery = () => {
  const router = useRouter()

  const modalPhoto = router.query.photo as string
  const closeModal = (photoID: string) => router.push(`/#${encodeURIComponent(photoID)}`)
  const nextPhoto =
    modalPhoto && photos[photos.findIndex((photo: string) => photo === modalPhoto) + 1]
  const prevPhoto =
    modalPhoto && photos[photos.findIndex((photo: string) => photo === modalPhoto) - 1]

  return (
    <>
      <div className="bg-gray-800 border-t border-b border-gray-900 shadow">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-y-4 sm:gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-4 lg:p-8">
            {photos.map((photo: string, i: number) => (
              <Link href={`/?photo=${photo}#${encodeURIComponent(photo)}`} key={i}>
                <a id={encodeURIComponent(photo)} className="scroll-mt-32 snap-start">
                  <GalleryImage photo={photo} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {modalPhoto && (
        <GalleryModal
          closeModal={() => closeModal(modalPhoto)}
          photo={modalPhoto}
          prevPhoto={prevPhoto}
          nextPhoto={nextPhoto}
        />
      )}
    </>
  )
}

export default Gallery
