import React, { useState } from 'react';

interface Pokemon {
  id: number;
  name: string;
  level: number;
  hp: number;
  maxHp: number;
  image: string;
}

const initialParty: Pokemon[] = [
  {
    id: 25,
    name: 'Pikachu',
    level: 42,
    hp: 80,
    maxHp: 80,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  },
  {
    id: 6,
    name: 'Charizard',
    level: 45,
    hp: 120,
    maxHp: 150,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
  },
  {
    id: 149,
    name: 'Dragonite',
    level: 55,
    hp: 200,
    maxHp: 200,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png'
  },
  {
    id: 131,
    name: 'Lapras',
    level: 40,
    hp: 160,
    maxHp: 160,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png'
  },
  {
    id: 143,
    name: 'Snorlax',
    level: 50,
    hp: 180,
    maxHp: 250,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png'
  },
  {
    id: 130,
    name: 'Gyarados',
    level: 48,
    hp: 140,
    maxHp: 140,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png'
  }
];

const PartySelector = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [party] = useState<Pokemon[]>(initialParty);

  return (
    <div className="bg-black/40 rounded-xl backdrop-blur-sm border border-white/10 p-4">
      <div className="flex justify-center gap-4">
        {party.map((pokemon) => (
          <div
            key={pokemon.id}
            onClick={() => setSelectedPokemon(pokemon)}
            className="relative group"
          >
            <div
              className={`w-16 h-16 rounded-full bg-white/10 p-2 cursor-pointer transition-all 
              hover:bg-white/20 relative overflow-hidden
              ${selectedPokemon?.id === pokemon.id ? 'ring-2 ring-purple-500' : ''}`}
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                <div
                  className={`h-full ${
                    pokemon.hp / pokemon.maxHp > 0.5
                      ? 'bg-green-500'
                      : pokemon.hp / pokemon.maxHp > 0.2
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${(pokemon.hp / pokemon.maxHp) * 100}%` }}
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              <span className="text-white text-xs bg-black/60 px-2 py-1 rounded-full">
                Lv.{pokemon.level} {pokemon.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartySelector;