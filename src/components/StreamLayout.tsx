import { Gamepad2, Heart, MessageCircle, Star, Trophy, Users2 } from 'lucide-react';
import StreamInfo from './StreamInfo';
import ChatBox from './ChatBox';
import RecentEvents from './RecentEvents';
import PartySelector from './PartySelector';

const StreamLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      <div className="grid grid-cols-12 gap-6 max-w-[1920px] mx-auto">
        {/* Main Game Feed */}
        <div className="col-span-8 space-y-6">
          <div className="bg-black/40 rounded-xl backdrop-blur-sm border border-white/10 p-4">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Gamepad2 className="w-16 h-16 text-white/20" />
                <span className="text-white/50 ml-4">Game Capture</span>
              </div>
            </div>
          </div>
          <PartySelector />
        </div>

        {/* Right Side Elements */}
        <div className="col-span-4 space-y-6">
          <StreamInfo />
          <ChatBox />
          <RecentEvents />
        </div>
      </div>
    </div>
  );
};

export default StreamLayout;