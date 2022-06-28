import Gallery from '../components/Gallery'

const Index = () => {
  return (
    <>
      <div className="w-full sm:py-24 text-orange-50 shadow-lg shadow-black">
        <div className="container mx-auto p-8 space-y-6 drop-shadow-lg">
          <div className="text-4xl sm:text-6xl italic font-semibold">
            From the bottom of our hearts, thank you so much for taking part in the most memorable
            day of our lives.
          </div>
          <div className="text-2xl sm:text-4xl italic">
            Here are some photos from the wedding and reception.
          </div>
        </div>
      </div>
      <Gallery />
    </>
  )
}

export default Index
