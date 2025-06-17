"use client";
import React, { useState } from "react";
import ChampionEntries from "@/utils/Champions.json";
import { IChampionItems } from "@/utils/Interfaces";
import ChampionPicture from "@/Assets/League Profile Picture.jpg";
import Image from "next/image";

const page = () => {
  const [champions, setChampions] = useState<IChampionItems[]>(ChampionEntries);
  return (
    <div className="flex min-h-screen items-center flex-col p-4 bg-black">
      <h1 className="text-5xl text-center text-white pt-8 mb-8">Champions</h1>

      <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {champions.map((items: IChampionItems, idx: number) => {
          return (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div>
                <Image
                  src={ChampionPicture}
                  alt="Champion Image"
                  className="h-60 w-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col items-center justify-center text-center flex-grow">
                <h2 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  {items.name}
                </h2>
                <h2 className="text-lg bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                  {items.role}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
