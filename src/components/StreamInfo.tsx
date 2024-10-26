import { Heart, Star, Trophy, Users2 } from 'lucide-react';

const StreamInfo = () => {
  return (
    <div className="bg-black/40 rounded-xl backdrop-blur-sm border border-white/10 p-4">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://images.unsplash.com/photo-1542779283-429940ce8336?w=400"
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
        />
        <div>
          <h2 className="text-white font-bold text-xl">PokemonMaster</h2>
          <div className="flex items-center space-x-2 text-purple-300">
            <Users2 className="w-4 h-4" />
            <span>1,337 viewers</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <Trophy className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
          <div className="text-white font-medium">42</div>
          <div className="text-xs text-gray-400">Badges</div>
        </div>
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <Star className="w-6 h-6 text-blue-400 mx-auto mb-1" />
          <div className="text-white font-medium">150</div>
          <div className="text-xs text-gray-400">Pokémon</div>
        </div>
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <Heart className="w-6 h-6 text-red-400 mx-auto mb-1" />
          <div className="text-white font-medium">10.2K</div>
          <div className="text-xs text-gray-400">Followers</div>
        </div>
      </div>
    </div>
  );
};

export default StreamInfo;