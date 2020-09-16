import React from 'react'





interface ChatProps { }

const Chat: StorefrontFunctionComponent<ChatProps> = ({ }) => {

  return (
    <div style={{
      position: 'absolute',
      right: '32px',
      bottom: '64px',
    
    }}>

      <iframe src="https://d1ynr93g6z78ed.cloudfront.net/index.html" width="500px" height="500px" style={{    borderColor: '#E76F51',
      borderWidth: '2px'}}></iframe>
    </div>
  
  )
}

Chat.schema = { 
  title: 'editor.chat.title',
  description: 'editor.chat.description',
  type: 'object',
  properties: {},
}

export default Chat
