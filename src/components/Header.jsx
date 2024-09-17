import Image from 'next/image'
import Menu from './Menu'

import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';

import logo from '@/assets/images/soulima-logo.png';

export default function Header() {
  return (
    <div className="w-full bg-gray-800">
    <div className='container flex justify-between w-full min-h-16 mx-auto px-4 py-2  text-white'>
        <div className='flex items-center gap-2'>
            <Image src={logo} alt="logo" className='' width={50} height={50} />
            <p className='text-2xl font-bold uppercase hidden sm:inline'>Soulima</p>
        </div>
        <div className='flex items-center gap-4 sm:gap-6'>
            <Menu title="home" adress="/" Icon={AiFillHome} />
            <Menu title="about" adress="/about" Icon={BsFillInfoCircleFill} />
        </div>
    </div>
    </div>
  )
}
