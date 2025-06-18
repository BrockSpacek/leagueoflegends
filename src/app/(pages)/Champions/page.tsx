"use client";
import React, { useMemo, useState } from "react";
import ChampionEntries from "@/utils/Champions.json";
import { IChampionItems } from "@/utils/Interfaces";
import ChampionPicture from "@/Assets/League Profile Picture.jpg";
import Image from "next/image";
import { X } from "lucide-react";

const page = () => {
  const [champions, setChampions] = useState<IChampionItems[]>(ChampionEntries);
  const [selectedChampion, setSelectedChampion] =
    useState<IChampionItems | null>(null);
  const [openChampionModal, setOpenChampionModal] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChampionModal = (champion: IChampionItems) => {
    setSelectedChampion(champion);
    setOpenChampionModal(true);
  };

  const closeModal = () => {
    setOpenChampionModal(false);
    setSelectedChampion(null);
  };

  const handleModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const filteredAndSortedChampions = useMemo(() => {
  let filtered = champions.filter((champion: IChampionItems) =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    champion.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return filtered;
}, [champions, searchTerm]);



  return (
    <div className="flex min-h-screen items-center flex-col p-4 bg-black">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 px-4 sm:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center sm:text-left">
          Champions
        </h1>

        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Champions"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-48 sm:w-56 lg:w-64 pl-4 pr-4 py-2 border border-gray-300 rounded-lg bg-transparent placeholder:text-gray-400 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredAndSortedChampions.map((items: IChampionItems, idx: number) => {
          return (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:transform hover:scale-105 transition-all duration-200 hover:shadow-2xl"
              onClick={() => handleChampionModal(items)}
            >
              <div>
                <Image
                  src={ChampionPicture}
                  alt="Champion Image"
                  priority
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

      {openChampionModal && selectedChampion && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={handleModalBackdropClick}
        >
          <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl"></div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-red-400 z-10 bg-slate-800/80 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 border border-red-500/30 hover:border-red-500/60 cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="relative p-6">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-1/3">
                  <div className="relative rounded-xl overflow-hidden border-2 border-gradient-to-r from-cyan-500 to-purple-500 p-1 bg-gradient-to-r from-cyan-500 to-purple-500">
                    <Image
                      src={ChampionPicture}
                      alt={selectedChampion.name}
                      priority
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {selectedChampion.name}
                  </h1>
                  <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent opacity-80">
                    {selectedChampion.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-yellow-500/20">
                      <span className="text-gray-400">Role:</span>{" "}
                      <span className="text-yellow-400 font-semibold">
                        {selectedChampion.role}
                      </span>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-green-500/20">
                      <span className="text-gray-400">Race:</span>{" "}
                      <span className="text-green-400 font-semibold">
                        {selectedChampion.race}
                      </span>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-red-500/20">
                      <span className="text-gray-400">Damage Type:</span>{" "}
                      <span className="text-red-400 font-semibold">
                        {selectedChampion.damageType}
                      </span>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20">
                      <span className="text-gray-400">Range:</span>{" "}
                      <span className="text-blue-400 font-semibold">
                        {selectedChampion.rangeType}
                      </span>
                      {selectedChampion.rangeDistance && (
                        <span className="text-gray-300">
                          {" "}
                          ({selectedChampion.rangeDistance})
                        </span>
                      )}
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-purple-500/20">
                      <span className="text-gray-400">Location:</span>{" "}
                      <span className="text-purple-400 font-semibold">
                        {selectedChampion.location}
                      </span>
                    </div>
                    {selectedChampion.age && (
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/20">
                        <span className="text-gray-400">Age:</span>{" "}
                        <span className="text-cyan-400 font-semibold">
                          {selectedChampion.age}
                        </span>
                      </div>
                    )}
                    {selectedChampion.relationships && (
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-pink-500/20">
                        <span className="text-gray-400">Relationships:</span>{" "}
                        <span className="text-pink-400 font-semibold">
                          {selectedChampion.relationships}
                        </span>
                      </div>
                    )}
                    {selectedChampion.legacyType && (
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-orange-500/20">
                        <span className="text-gray-400">Legacy:</span>{" "}
                        <span className="text-orange-400 font-semibold">
                          {selectedChampion.legacyType}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bio Section */}
              <div className="mb-8 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Biography
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  {selectedChampion.bio}
                </p>
              </div>

              {/* Abilities Section */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-center">
                  Abilities
                </h3>

                {/* Passive */}
                <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-500/40 shadow-lg shadow-yellow-500/10">
                  <h4 className="text-2xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      P
                    </span>
                    {selectedChampion.passive}
                  </h4>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {selectedChampion.passiveDescription}
                  </p>
                </div>

                {/* Q Ability */}
                <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 backdrop-blur-sm rounded-xl p-6 border-2 border-green-500/40 shadow-lg shadow-green-500/10">
                  <h4 className="text-2xl font-bold text-green-400 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      Q
                    </span>
                    {selectedChampion.qAbility}
                  </h4>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {selectedChampion.qAbilityDescription}
                  </p>
                </div>

                {/* W Ability */}
                <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-500/40 shadow-lg shadow-blue-500/10">
                  <h4 className="text-2xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      W
                    </span>
                    {selectedChampion.wAbility}
                  </h4>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {selectedChampion.wAbilityDescription}
                  </p>
                </div>

                {/* E Ability */}
                <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-500/40 shadow-lg shadow-purple-500/10">
                  <h4 className="text-2xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      E
                    </span>
                    {selectedChampion.eAbility}
                  </h4>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {selectedChampion.eAbilityDescription}
                  </p>
                </div>

                {/* Ultimate */}
                <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-xl p-6 border-3 border-red-500/60 shadow-2xl shadow-red-500/20 relative overflow-hidden">
                  {/* Ultimate glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 animate-pulse"></div>
                  <h4 className="relative text-2xl font-bold text-red-400 mb-3 flex items-center gap-2">
                    <span className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      R
                    </span>
                    <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                      {selectedChampion.ultimateAbility}
                    </span>
                  </h4>
                  <p className="relative text-gray-100 text-lg leading-relaxed font-medium">
                    {selectedChampion.ultimateAbilityDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
