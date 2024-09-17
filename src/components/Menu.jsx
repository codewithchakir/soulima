import Link from 'next/link'
import React from 'react'

export default function Menu({title, adress, Icon}) {
  return (
    <div>
        <Link href={adress} className=' hover:text-red-500 transition-all duration-300'>
            <Icon className='text-2xl sm:hidden' />
            <p className='uppercase hidden sm:inline text-sm'>{title}</p>
        </Link>
    </div>
  )
}
