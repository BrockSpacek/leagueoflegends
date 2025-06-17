"use client"
import Image from 'next/image';
import Logo from "@/Assets/LeagueLogo.jpg";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NavBarComponent = () => {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    const handleOpenHome = () => {
        router.push('/')
    }

    const handleOpenChampions = () => {
        router.push('/Champions')
    }

    const handleOpenMonsters = () => {
        router.push('/Monsters')
    }

    const handleOpenItems = () => {
        router.push('/Items')
    }

     const handleOpenBuilds = () => {
        router.push('/Builds')
    }


  return (
    <div className='bg-gradient-to-r from-emerald-400 to-cyan-400 h-16 w-full sticky top-0 z-50'>
    <div className='flex justify-between items-center h-full px-4 sm:px-6 lg:px-8'>
        
        {/* Logo */}
        <div className='flex-shrink-0'>
            <Image
                src={Logo}
                alt='Logo'
                priority
                className='h-10 w-20 sm:h-12 sm:w-24 lg:h-[60px] lg:w-[120px]'
            />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center space-x-4 lg:space-x-8 xl:space-x-12'>
            <button 
                className='px-3 py-2 text-sm lg:text-lg xl:text-xl font-semibold cursor-pointer hover:text-emerald-200 hover:border-b-2 border-white transition-all duration-200 ease-in-out' 
                onClick={handleOpenHome}
            >
                Home
            </button>
            <button 
                className='px-3 py-2 text-sm lg:text-lg xl:text-xl font-semibold cursor-pointer hover:text-emerald-200 hover:border-b-2 border-white transition-all duration-200 ease-in-out' 
                onClick={handleOpenChampions}
            >
                Champions
            </button>
            <button 
                className='px-3 py-2 text-sm lg:text-lg xl:text-xl font-semibold cursor-pointer hover:text-emerald-200 hover:border-b-2 border-white transition-all duration-200 ease-in-out' 
                onClick={handleOpenItems}
            >
                Items
            </button>
            <button 
                className='px-3 py-2 text-sm lg:text-lg xl:text-xl font-semibold cursor-pointer hover:text-emerald-200 hover:border-b-2 border-white transition-all duration-200 ease-in-out' 
                onClick={handleOpenMonsters}
            >
                Monsters
            </button>
            <button 
                className='px-3 py-2 text-sm lg:text-lg xl:text-xl font-semibold cursor-pointer hover:text-emerald-200 hover:border-b-2 border-white transition-all duration-200 ease-in-out' 
                onClick={handleOpenBuilds}
            >
                Builds
            </button>
        </div>

        {/* Mobile menu button */}
        <div className='md:hidden'>
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-emerald-200 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors'
            >
                {mobileMenuOpen ? (
                    <X className='block h-6 w-6' />
                ) : (
                    <Menu className='block h-6 w-6' />
                )}
            </button>
        </div>
    </div>

    {/* Mobile Navigation Menu */}
    {mobileMenuOpen && (
        <div className='md:hidden bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
                <button 
                    className='block w-full text-left px-3 py-2 text-base font-semibold text-white hover:text-emerald-200 hover:bg-emerald-600 rounded-md transition-colors' 
                    onClick={() => {
                        handleOpenHome();
                        setMobileMenuOpen(false);
                    }}
                >
                    Home
                </button>
                <button 
                    className='block w-full text-left px-3 py-2 text-base font-semibold text-white hover:text-emerald-200 hover:bg-emerald-600 rounded-md transition-colors' 
                    onClick={() => {
                        handleOpenChampions();
                        setMobileMenuOpen(false);
                    }}
                >
                    Champions
                </button>
                <button 
                    className='block w-full text-left px-3 py-2 text-base font-semibold text-white hover:text-emerald-200 hover:bg-emerald-600 rounded-md transition-colors' 
                    onClick={() => {
                        handleOpenItems();
                        setMobileMenuOpen(false);
                    }}
                >
                    Items
                </button>
                <button 
                    className='block w-full text-left px-3 py-2 text-base font-semibold text-white hover:text-emerald-200 hover:bg-emerald-600 rounded-md transition-colors' 
                    onClick={() => {
                        handleOpenMonsters();
                        setMobileMenuOpen(false);
                    }}
                >
                    Monsters
                </button>
                <button 
                    className='block w-full text-left px-3 py-2 text-base font-semibold text-white hover:text-emerald-200 hover:bg-emerald-600 rounded-md transition-colors' 
                    onClick={() => {
                        handleOpenBuilds();
                        setMobileMenuOpen(false);
                    }}
                >
                    Builds
                </button>
            </div>
        </div>
    )}
</div>
  )
}

export default NavBarComponent