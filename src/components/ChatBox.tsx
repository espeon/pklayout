import { MessageCircle } from 'lucide-react';

const ChatBox = () => {
  return (
    <div className="bg-black/40 rounded-xl backdrop-blur-sm border border-white/10 p-4 h-[300px] flex flex-col">
      <div className="flex items-center space-x-2 mb-4">
        <MessageCircle className="w-5 h-5 text-purple-300" />
        <h3 className="text-white font-semibold">Live Chat</h3>
      </div>
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        <div className="text-sm">
          <span className="text-purple-400 font-medium">Ash_K:</span>
          <span className="text-white/90 ml-2">That was an amazing catch!</span>
        </div>
        <div className="text-sm">
          <span className="text-purple-400 font-medium">MistyWater:</span>
          <span className="text-white/90 ml-2">Which Pokemon are we hunting today?</span>
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Send a message..."
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );
};

export default ChatBox;