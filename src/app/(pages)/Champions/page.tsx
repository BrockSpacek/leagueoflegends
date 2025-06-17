"use client"
import React, { useState } from 'react'
import ChampionEntries from "@/utils/Champions.json";
import { IChampionItems } from '@/utils/Interfaces';
import ChampionPicture from "@/Assets/League Profile Picture.jpg";
import Image from 'next/image';

const page = () => {
    const [champions, setChampions] = useState<IChampionItems[]>(ChampionEntries);
  return (
    <div className='flex min-h-screen flex-col p-16 bg-black'>
        <h1 className='text-5xl text-center'>Champions</h1>

        <div className='container grid lg:grid-cols-6'>
            <div className=''>
                {
                    champions.map((items:IChampionItems, idx:number) => {
                        return (
                            <div key={idx}>
                                <div className='bg-white'>
                                    <div>
                                        <Image src={ChampionPicture} alt='Champion Image' className='h-60 w-60' />
                                    </div>
                                    <h2 className='text-red-500 text-center'>{items.name}</h2>
                                    <h2 className='text-blue-500 text-center'>{items.role}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </div>
  )
}

export default page