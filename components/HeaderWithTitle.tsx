import Image from 'next/image'
import React from 'react'

const HeaderWithTitle = ({title}:{title:String}) => {
  return (
    <div className="w-full relative">
    <Image
      src="/community/img.jpg"
      alt="Projects Banner"
      width={1920}
      height={400}
      className="w-full h-[400px] object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="text-2xl md:text-5xl !uppercase lg:text-6xl font-bold text-center text-white shadow-text">
        {title}
      </h1>
    </div>
  </div>
  )
}

export default HeaderWithTitle