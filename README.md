# Personalized AI chatbot for your website!
<img width="297" alt="Screenshot 2024-04-04 at 18 11 18" src="https://github.com/chloewang-200/chloe-bot-backend/assets/84855841/182f10e8-dbda-4a25-9f6b-07294d79e986">\
Demo: \
https://chloewang-200.github.io/

This is my first time working with LLM models and learning about how it works. This project took me a whole day of grinding, learning new concepts and trying out different libraries & APIs. Feel free to use my code! 😊

This is the UI frontend part of the chatbot. The backend can be found at https://github.com/chloewang-200/chloe-bot-backend

Also if you are new to LLM like me, below is a quick start.

# Stucture
I am using
- React Frontend
- Python Flask backend
- OpenAI Gpt-3.5

# Frontend
I used this React component by Deep-chat @ https://github.com/OvidijusParsiunas/deep-chat. Features that I found super useful are:
- customizable chatbox UI
- handles sending and receiving for you
- you can send session chat history (great for continuous chatting)
- default initialized messages

This component basically handles everything for you, so there's not much coding on the frontend.

# Backend-without personalization
If you don't want any personalization, backend is also straightforward. You can simply send the input you got from the frontend to openAI, and then return the result to the frontend. Deep-chat handles rendering replies for you.

# Backend-with personalization

If you want some personalizations, you can adjust gpt parameters such as temperature.
To have more personalization, I am using the prompt-before-prompt technique. This allows you to feed gpt some background information (called "system" message) before answering user qeustions. So to create a chatbot version of you, you simply tell gpt everything about you before they answer users' quesions. You can also add in instructions like "be friendly", "be concise"...
However the problem here is that you can't send all the information - it will costs you a lot of tokens!
Therefore we need a way to find texts that are useful - and openAI does this too!
The main idea is that in a lot of LLM models, texts/paragraphs/information has an embedding - you can think of it as an coordinate in multi-dimensional space. Words with similar meanings will have similar embeddings, in other words, they will appear closer to each other in this multi-dimensional space. Therefore, we can use this concept to compare the embeddings of texts to find information that's closely related to the user's question!

## Creating Embeddings
1. split your input texts into chunks of paragraphs.
   - Again, you can't send gpt everything, so you need to send it some chunks of paragraphs. 
   - you can split your info into groups of equal length of your choice. It is also nice to have some overlap of texts to make sure no information is lost. Langchain has a CharacterTextSplitter functtion that can help you do this.
3. Create (texts, embedding) pairs for all your chunks of paragraphs.
   - you need to use the OpenAIEmbeddings to embed them. If you information is not that huge, you can simply store it as a json file. Otherwise you can try using vector store.
4. Create embedding of user's question
5. Find closest embedding of your texts compared to user's embedding
   -  for example, you can find your top 4 texts by:
   -  `similarities = cosine_similarity([question_embedding], embeddings)`
   -  `p_indices = np.argsort(similarities[0])[-4:][::-1]`
6. send the closet texts to gpt
   - now you can send these texts along with the user question to gpt.
   - you can phrase it like "Use this information as context to answer the user question: ${related_texts}

And now you have a personalized chatbot!


