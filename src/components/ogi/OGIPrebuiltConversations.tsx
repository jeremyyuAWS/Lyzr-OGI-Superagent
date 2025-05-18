import { useState } from 'react';
import { Play, ChevronRight, Info, MessageSquare, Zap } from 'lucide-react';
import { categorizedOGIConversations } from '../../data/mockOGIResponses';

interface OGIPrebuiltConversationsProps {
  category: string;
  onConversationSelect: (messages: any[]) => void;
}

const OGIPrebuiltConversations = ({ category, onConversationSelect }: OGIPrebuiltConversationsProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // Get conversations for the selected category
  const conversations = categorizedOGIConversations[category as keyof typeof categorizedOGIConversations] || [];
  
  const handleConversationClick = (conversationId: string) => {
    // Toggle expanded state
    setExpandedId(expandedId === conversationId ? null : conversationId);
  };
  
  const startConversation = (conversationId: string) => {
    // Find the conversation
    const conversation = conversations.find(c => c.id === conversationId);
    if (conversation) {
      onConversationSelect(conversation.messages);
    }
  };
  
  if (conversations.length === 0) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-500 text-center">
        No pre-built conversations available for this category.
      </div>
    );
  }
  
  return (
    <div className="space-y-2">
      {conversations.map((conversation) => (
        <div 
          key={conversation.id}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden"
        >
          <div 
            className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50"
            onClick={() => handleConversationClick(conversation.id)}
          >
            <div className="flex items-center">
              <div className="bg-blue-100 p-1.5 rounded-md mr-2.5">
                <MessageSquare className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-800">{conversation.title}</div>
                <div className="text-xs text-gray-500 line-clamp-1">{conversation.context}</div>
              </div>
            </div>
            <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform ${expandedId === conversation.id ? 'rotate-90' : ''}`} />
          </div>
          
          {expandedId === conversation.id && (
            <div className="p-3 pt-0 border-t border-gray-100">
              <div className="mb-3">
                <p className="text-xs text-gray-600 mb-2">{conversation.context}</p>
                <div className="flex items-start bg-gray-50 p-2 rounded text-xs">
                  <Info className="h-3.5 w-3.5 text-blue-500 mr-1.5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {conversation.messages[0].content.length > 100 
                      ? conversation.messages[0].content.substring(0, 100) + '...'
                      : conversation.messages[0].content}
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => startConversation(conversation.id)}
                className="w-full flex items-center justify-center py-2 bg-black hover:bg-gray-800 text-white rounded-md text-xs transition-colors"
              >
                <Play className="h-3.5 w-3.5 mr-1.5" />
                Start Conversation
              </button>
            </div>
          )}
        </div>
      ))}
      
      <div className="py-2 px-3 bg-blue-50 rounded-lg border border-blue-100">
        <div className="flex items-start">
          <Zap className="h-4 w-4 text-blue-500 mr-1.5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-blue-800 font-medium">Pro Tip</p>
            <p className="text-xs text-blue-700 mt-0.5">
              These conversations showcase typical interactions with the OGI assistant. Click one to see a complete conversation flow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OGIPrebuiltConversations;