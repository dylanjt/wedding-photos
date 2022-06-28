import Modal from 'react-modal'
import Image from 'next/image'
import { useRouter } from 'next/router'

import close from '../public/close.svg'

Modal.setAppElement('#__next')

const GalleryModal = ({ closeModal, photo, prevPhoto, nextPhoto }) => {
  const router = useRouter()

  return (
    <Modal isOpen={true} onRequestClose={closeModal} style={customStyles}>
      <div className="relative block w-full h-full group">
        <Image
          src={`https://d3ky03j1n6ly73.cloudfront.net/${photo}-lg.png`}
          layout="fill"
          objectFit="contain"
          alt=""
          placeholder="blur"
          blurDataURL={`https://d3ky03j1n6ly73.cloudfront.net/${photo}-blur.png`}
        />
        <div className="absolute w-full flex flex-row justify-between z-20">
          <div className="text-white font-sans hover:underline text-sm m-4 bg-gray-800/75 p-2 rounded">
            <a
              href={`https://d3ky03j1n6ly73.cloudfront.net/${photo}.jpg`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Full Res
            </a>
          </div>
          <div className="border border-gray-600 hover:border-gray-400 rounded-full h-8 w-8 grid place-items-center cursor-pointer m-4 bg-black/75">
            <Image src={close} width="20" height="20" onClick={closeModal} alt="Close" />
          </div>
        </div>
        <div className="flex flex-row justify-between h-full z-50">
          <div
            className={`block w-1/2 h-full z-10 ${prevPhoto ? 'cursor-pointer' : ''}`}
            onClick={() =>
              prevPhoto && router.push(`/?photo=${prevPhoto}#${encodeURIComponent(prevPhoto)}`)
            }
          />
          <div
            className={`block w-1/2 h-full z-10 ${nextPhoto ? 'cursor-pointer' : ''}`}
            onClick={() =>
              nextPhoto && router.push(`/?photo=${nextPhoto}#${encodeURIComponent(nextPhoto)}`)
            }
          />
        </div>
      </div>
    </Modal>
  )
}

export default GalleryModal

const customStyles = {
  content: {
    padding: '0',
    height: 'auto',
    backgroundColor: 'black',
    border: 'none',
    position: 'absolute',
  },
  overlay: {
    backgroundColor: '#00000085',
    zIndex: '1000',
  },
}
