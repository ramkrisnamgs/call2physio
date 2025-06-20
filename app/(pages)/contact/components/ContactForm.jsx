import React from 'react'

const ContactForm = () => {
  return (
     <div className='px-20 sm:px-6 lg:px-24 py-10'>
   <div className='w-full'>
     <div className='space-y-8'>
       <div className='space-y-2 text-center'>
         <h2 className='text-4xl font-bold text-gray-900'>Get in Touch</h2>
         <p className='text-gray-600 text-lg'>We'd love to hear from you. Send us a message!</p>
       </div>

       <form className='space-y-8 bg-white p-8 rounded-2xl'>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
           <div className='space-y-2'>
             <label htmlFor='name' className='block text-sm font-semibold text-gray-700'>
               Full Name
             </label>
             <input
               type='text'
               id='name'
               name='name'
               className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none transition-all duration-200'
               placeholder='John Doe'
               required
             />
           </div>

           <div className='space-y-2'>
             <label htmlFor='email' className='block text-sm font-semibold text-gray-700'>
               Email Address
             </label>
             <input
               type='email'
               id='email'
               name='email'
               className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none transition-all duration-200'
               placeholder='john@example.com'
               required
             />
           </div>
         </div>

         <div className='space-y-2'>
           <label htmlFor='subject' className='block text-sm font-semibold text-gray-700'>
             Subject
           </label>
           <input
             type='text'
             id='subject'
             name='subject'
             className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none transition-all duration-200'
             placeholder='How can we help you?'
             required
           />
         </div>

         <div className='space-y-2'>
           <label htmlFor='message' className='block text-sm font-semibold text-gray-700'>
             Message
           </label>
           <textarea
             id='message'
             name='message'
             rows='6'
             className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none transition-all duration-200 resize-none'
             placeholder='Please describe your inquiry in detail...'
             required
           />
         </div>

         <div>
           <button
             type='submit'
             className='w-full bg-[#003A70] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#003A70] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]'
           >
             Send Message
           </button>
         </div>
       </form>
     </div>
   </div>
   </div>
  )
}

export default ContactForm