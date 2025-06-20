import { MapPin } from 'lucide-react'
import React from 'react'

const Address = () => {
  return (
    <div className='px-20 sm:px-6 lg:px-24 py-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* Map */}
        <div className='w-full h-[400px] rounded-2xl overflow-hidden shadow-xl'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" 
            className='w-full h-full'
            style={{border:0}} 
            allowFullScreen="" 
            aria-hidden="false" 
            tabIndex="0"
          />
        </div>

        {/* Address */}
        <div className='space-y-8'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold text-gray-900'>Contact Details</h2>
            <h3 className='text-xl font-semibold text-gray-700'>Get in Touch</h3>
            <p className='text-gray-600 leading-relaxed'>
              We're here to help! Whether you have questions about our services, need technical support, or want to discuss a potential collaboration, our team is ready to assist you. Feel free to reach out through any of our office locations listed below.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='p-3 bg-white rounded-lg border border-gray-100'>
              <MapPin className='w-4 h-4 text-blue-600 mb-2' />
              <h4 className='text-sm font-medium text-gray-900'>Office Address</h4>
              <p className='text-xs text-gray-600 mt-1'>123, Main Street, Anytown, USA</p>
            </div>

            <div className='p-3 bg-white rounded-lg border border-gray-100'>
              <MapPin className='w-4 h-4 text-blue-600 mb-2' />
              <h4 className='text-sm font-medium text-gray-900'>Branch Office</h4>
              <p className='text-xs text-gray-600 mt-1'>456, Business Park, Tech City, USA</p>
            </div>

            <div className='p-3 bg-white rounded-lg border border-gray-100'>
              <MapPin className='w-4 h-4 text-blue-600 mb-2' />
              <h4 className='text-sm font-medium text-gray-900'>Warehouse</h4>
              <p className='text-xs text-gray-600 mt-1'>789, Industrial Area, Port City, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address