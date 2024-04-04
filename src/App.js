// import {DeepChat as DeepChatCore} from 'deep-chat'; <- type
import { DeepChat } from 'deep-chat-react';
import './style.css';

const App = () => {
  const initialMessages = [
    // { role: 'user', text: 'Hey, how are you today?' },
    { role: 'ai', text: 'Hi, I\'m ChloeBot. Let\'s chat :)' },
    { role: 'ai', text: 'You can ask me anything, and share anything with me✨' },
  ];
  // demo/style/textInput are examples of passing an object directly into a property
  // initialMessages is an example of passing a state object into a property
  return (
    <div className="App">
      <h1>Chloe Bot</h1>
      <DeepChat
        // demo={true}
        request={
          {url: "https://frozen-gorge-26863-ad0ce4fb3b77.herokuapp.com/openai-chat"}
        }
        
        // stream={true}
        requestBodyLimits={{"maxMessages": 0}}
        avatars={
          {"ai": {"src": "chloebot.png", "styles": {"avatar": {"marginLeft": "-3px"}}}}
        }
        style={{ borderRadius: '10px' }}
        textInput={{ placeholder: { text: 'Chat with me' } }}
        initialMessages={initialMessages}
      />
    </div>
  );
};

export default App;
