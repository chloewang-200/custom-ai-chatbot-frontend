// import {DeepChat as DeepChatCore} from 'deep-chat'; <- type
import { DeepChat } from 'deep-chat-react';
import './style.css';

const App = () => {
  const initialMessages = [
    // { role: 'user', text: 'Hey, how are you today?' },
    { role: 'ai', text: 'Hi, I\'m ChloeBot. Let\'s chat :)' },
    { role: 'bob', text: 'p.s. I\'m based on GPT-3.5 model, so some info maybe completely inaccurate 😭' },
  ];
  // demo/style/textInput are examples of passing an object directly into a property
  // initialMessages is an example of passing a state object into a property
  return (
    <div className="App">
      <h1>Deep Chat</h1>
      <DeepChat
        // demo={true}
        request={
          {url: "http://localhost:8080/openai-chat"}
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
