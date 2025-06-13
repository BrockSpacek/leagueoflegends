"use client"
import Image from 'next/image';
import Logo from "@/Assets/LeagueLogo.jpg";
import React from 'react'
import { useRouter } from 'next/navigation';

const NavBarComponent = () => {
    const router = useRouter();


    const handleOpenHome = () => {
        router.push('/')
    }

    const handleOpenChampions = () => {
        router.push('/Champions')
    }

    const handleOpenProjects = () => {
        router.push('/Projects')
    }

    const handleOpenInformation = () => {
        router.push('/Information')
    }


  return (
    <div className='bg-gradient-to-r from-emerald-400 to-cyan-400 h-15 w-full'>
    <div className='flex justify-between items-center text-2xl h-full'>
        <div className=''>
            <Image 
                src={Logo} 
                alt='Logo' 
                priority
                className='h-[60px] w-[120px]' 
                
            />
        </div>
        <div className='flex items-center gap-20 pr-24 font-semibold'>
            <button className='cursor-pointer hover:text-emerald-200 hover:border-b border-white transition-colors' onClick={handleOpenHome}>
                Home  
            </button>
            <button className='cursor-pointer hover:text-emerald-200 hover:border-b border-white transition-colors' onClick={handleOpenChampions}>
                Champions
            </button>
            <button className='cursor-pointer hover:text-emerald-200 hover:border-b border-white transition-colors' onClick={handleOpenProjects}>
                Items
            </button>
            <button className='cursor-pointer hover:text-emerald-200 hover:border-b border-white transition-colors' onClick={handleOpenInformation}>
                Monsters
            </button>
            <button className='cursor-pointer hover:text-emerald-200 hover:border-b border-white transition-colors' onClick={handleOpenInformation}>
                Builds
            </button>
        </div>
    </div>
</div>
  )
}

export default NavBarComponent