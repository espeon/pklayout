import { MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import randomMessages from '../lib/exampleMsgs'

interface ChatMessage {
  message: string,
  user: string
}

const initialMessages = [
  randomMessages[Math.floor(Math.random() * randomMessages.length)],
  randomMessages[Math.floor(Math.random() * randomMessages.length)],
  randomMessages[Math.floor(Math.random() * randomMessages.length)],
]

const ChatBox = () => {
  const [chats, setChats] = useState<ChatMessage[]>(initialMessages);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Select a random message and add it to the chat
      const newMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
      setChats((prevChats) => {
        const updatedChats = [...prevChats, newMessage];
        // Prune the top if there are more than 10 messages
        return updatedChats.length > 10 ? updatedChats.slice(1) : updatedChats;
      });
    }, 3000); // Adds a new message every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chats]);

  return (
    <div className="bg-black/40 rounded-xl backdrop-blur-sm border border-white/10 p-4 h-[300px] flex flex-col">
      <div className='fixed'>
        <div className="flex items-center space-x-2 mb-4">
          <MessageCircle className="w-5 h-5 text-purple-300" />
          <h3 className="text-white font-semibold">Live Chat</h3>
        </div>
      </div>
      <div className="overflow-y-auto h-min" style={{
        maskImage: `linear-gradient(to bottom, transparent 8%, black 40%)`,
        maskComposite: 'intersect',
      }}>
        <div className="flex-1 max-h-min h-full overflow-y-auto space-y-2"
          ref={scrollRef}>
            <div className='h-10'/>
          {chats.map((m, i) => <div className="text-sm" key={m.user+m.message+i}>
            <span className="text-purple-400 font-medium">{m.user}:</span>
            <span className="text-white/90 ml-2">{m.message}</span>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;