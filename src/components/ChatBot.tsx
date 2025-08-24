import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface QuestionOption {
  id: string;
  question: string;
  answer: string;
}

const predefinedQuestions: QuestionOption[] = [
  {
    id: '1',
    question: 'Tell me about John Ashley\'s background',
    answer: 'John Ashley Villanueva holds a Bachelors degree in Information Technology (2021-2025) and is a skilled full-stack developer proficient in React, TypeScript, and Node.js. With strong analytical abilities and adaptability in fast-paced environments, he excels at building innovative solutions that merge technical expertise with real-world problem-solving.'
  },
{
  id: '2',
  question: "What are John Ashley's main skills?",
  answer: `John Ashley is a **full-stack developer** with expertise in:

- **Frontend Development**: HTML, CSS, JavaScript, React, Bootstrap  
- **Backend Development**: PHP, Laravel, Python  
- **Database Management**: MySQL  

Additional technical skills include:

- Version control with Git  
- AI prompt engineering  
- Technical support  

He maintains a strong focus on **web development best practices** while continuously expanding his skill set.`
},


{
  id: '3',
  question: 'What kind of projects has John Ashley worked on?',
  answer: `John Ashley has delivered full-stack solutions across diverse industries:

**Web Developer – AIA Philippines** (Aug–Nov 2024)  
• Enhanced company websites using HTML/CSS, JavaScript, PHP, and Laravel  
• Improved UX and backend functionality  
• Built SDA Management System with member tracking features

**Web Developer – T-Mobelli Kitchens** (Aug–Nov 2024)  
• Developed automated inventory and purchase order system using Laravel  
• Streamlined operations with costing and PO features  
• Deployed system for internal use

**Capstone Project – Integrated Management System** (2024–2025)  
• Built with React, Laravel, and MySQL  
• Implemented real-time analytics, role-based access, and workflow automation  
• Integrated inventory, transfers, and returns management

**RedShop – E-commerce Platform** (2024–2025)  
• Created affiliate e-commerce platform with PHP and MySQL  
• Integrated TikTok/Shopee for product management  
• Developed admin panel and dynamic product catalog

Each project showcases his ability to combine technical precision with user-focused design.`
},

{
  id: '4',
  question: 'How can I contact John Ashley?',
  answer: `You can reach out to **John Ashley** through any of the following channels:

- 📧 Email: [villanuevajohn519@gmail.com](mailto:villanuevajohn519@gmail.com)  
- 💼 LinkedIn: [linkedin.com/in/john-ashley-villanueva-29b607265](https://www.linkedin.com/in/john-ashley-villanueva-29b607265)  
- 🌐 Facebook: [facebook.com/AZHLEEH](https://www.facebook.com/AZHLEEH)  
- 💻 GitHub: [github.com/Ashlipogi](https://github.com/Ashlipogi)

You can also reach out via this website — go to **Contact** and fill out the **Send Message** form.

John Ashley is always open to discussing **new opportunities** and **collaborative projects**.`
},


  {
    id: '5',
    question: 'What makes John Ashley unique as a developer?',
    answer: 'John Ashley combines technical expertise with creative problem-solving and excellent communication skills. The ability to translate complex technical concepts into user-friendly solutions, along with a passion for continuous learning and mentoring others, sets John Ashley apart as a frontend enthusiast and backend beginner.'
  },
  {
    id: '6',
    question: 'What are John Ashley\'s career goals?',
    answer: 'John Ashley aims to continue growing as a full-stack developer while exploring emerging technologies like AI/ML integration and cloud-native architectures. The goal is to lead innovative projects that make a positive impact while building strong, collaborative teams in the web development field.'
  }
];

const ThinkingDots = () => (
  <span className="flex gap-1 items-center h-5">
    <span className="animate-bounce" style={{ animationDelay: '0s' }}>.</span>
    <span className="animate-bounce" style={{ animationDelay: '.2s' }}>.</span>
    <span className="animate-bounce" style={{ animationDelay: '.4s' }}>.</span>
  </span>
);

const ChatBot = () => {
  const [hasAskedQuestion, setHasAskedQuestion] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: "Hi! I'm John Ashley's AI Assistant. I can answer questions about John Ashley's background, skills, and experience. Choose a question below to get started!",
      isUser: false,
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    // Use requestAnimationFrame to ensure DOM is updated
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end'
      });
    });
  };

  const scrollToMessage = (messageId: string) => {
    // Scroll to specific message
    requestAnimationFrame(() => {
      const messageElement = document.querySelector(`[data-message-id="${messageId}"]`);
      if (messageElement) {
        messageElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      } else {
        // Fallback to bottom if message not found
        scrollToBottom();
      }
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuestionClick = (question: QuestionOption) => {
    setHasAskedQuestion(true);

    const userMessageId = Date.now().toString();
    const thinkingMessageId = (Date.now() + 1).toString();
    const botMessageId = (Date.now() + 2).toString();

    const userMessage: Message = {
      id: userMessageId,
      text: question.question,
      isUser: true,
      timestamp: new Date()
    };

    // Instead of text, use a flag for thinking message
    const thinkingMessage: Message = {
      id: thinkingMessageId,
      text: "__thinking__", // special marker
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, thinkingMessage]);

    // Scroll to the user's question after a brief delay to ensure DOM update
    setTimeout(() => {
      scrollToMessage(userMessageId);
    }, 100);

    // After 5 seconds, replace "Thinking..." with the actual answer
    setTimeout(() => {
      setMessages(prev => {
        const filtered = prev.filter(msg => msg.id !== thinkingMessageId);
        return [
          ...filtered,
          {
            id: botMessageId,
            text: question.answer,
            isUser: false,
            timestamp: new Date()
          }
        ];
      });
      scrollToMessage(botMessageId);
    }, 5000);
  };

  const clearChat = () => {
    setHasAskedQuestion(false);
    setMessages([
      {
        id: '0',
        text: "Hi! I'm John Ashley's AI Assistant. I can answer questions about John Ashley's background, skills, and experience. Choose a question below to get started!",
        isUser: false,
        timestamp: new Date()
      }
    ]);
  };

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-[1000] h-14 w-14 rounded-full bg-black text-white hover:bg-black-200 shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white/20 animate-glow-pulse"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
          <Card className="fixed bottom-24 right-6 z-[1000] w-80 h-[30rem] shadow-2xl border border-gray-200 bg-white/95 backdrop-blur-lg flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          
            <CardTitle className="pb-3 pt-3 ml-4 text-lg font-semibold flex items-center gap-2 text-gray-800">
                  <img
      src="imgs/Layer.png"
      alt="AshDev Logo"
      className="w-7 h-auto object-contain -ml-2"
  
    />
              Ash AI Assistant
            </CardTitle>
            <Button
              onClick={clearChat}
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
            >
              Clear
            </Button>
          
          
          <CardContent className="p-0 flex flex-col flex-1 overflow-hidden">
            {/* Messages (scrollable) */}
            <ScrollArea 
              ref={scrollAreaRef}
              className="flex-1 p-0"              
            >
              <div className="space-y-4 p-1">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    data-message-id={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} transition-all duration-300` }
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 shadow-sm ${
                        message.isUser
                          ? 'bg-gray-500 text-white'
                          : 'bg-gray-200 text-gray-800 border border-gray-300'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {!message.isUser && <img
      src="imgs/Logo Ash.png"
      alt="AshDev Logo"
      className="w-6 h-6 object-contain"
  
    />}
                        {message.isUser && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        <div>
                          <div className="text-sm leading-relaxed whitespace-pre-line">
                            {message.text === "__thinking__" ? (
                              <span className="flex items-center">
                                Thinking <ThinkingDots />
                              </span>
                            ) : (
                              <ReactMarkdown>{message.text}</ReactMarkdown>
                            )}
                          </div>
                          <span className="text-xs opacity-70 mt-1 block">
                            {message.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Question suggestions */}
            <div className="border-t border-gray-200 bg-gray-50/50 p-4">
              <p className="text-sm text-gray-600 mb-3 font-medium">Questions about John Ashley:</p>
              <ScrollArea className="h-40">
                <div className="space-y-2 pr-4">
                  {predefinedQuestions.map((question) => (
<Button
  key={question.id}
  onClick={() => handleQuestionClick(question)}
  variant="outline"
  size="sm"
  className="w-full text-left justify-start text-xs h-9 bg-white hover:bg-gray-50 hover:text-blue-700 hover:border-black-700 transition-all duration-200 border-black-700 whitespace-normal break-words line-clamp-2"
>
  {question.question}
</Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;