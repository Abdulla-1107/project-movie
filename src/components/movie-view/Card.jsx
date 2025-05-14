import React from 'react'

const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL

  return (
    <div className=' rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300'>
      <img
        className='w-full object-cover'
        loading='lazy'
        src={url + item.poster_path}
        alt={item.title || 'Movie Poster'}
      />
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-800 mb-2'>{item.title}</h3>
        <p className='text-sm text-gray-600'>Rating: <span className='font-bold text-yellow-500'>{item.vote_average}</span></p>
      </div>
    </div>
  )
}

export default React.memo(Card)
