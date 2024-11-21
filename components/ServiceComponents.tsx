import Link from 'next/link'
import React from 'react'

const ServiceComponents = ({service}:{service:any}) => {
  return (
    <Link 
    href={service?.path}
    data-aos="fade-up"
    className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:bg-gray-700 hover:text-white hover:cursor-pointer transition-all duration-500"
  >
    <div className="text-gray-800 text-5xl mb-4 transform transition-transform duration-300 group-hover:text-white group-hover:scale-x-[-1]">
      {service.icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
    <p className="text-gray-600 text-center group-hover:text-gray-300">
      {service.description}
    </p>
  </Link>  )
}

export default ServiceComponents