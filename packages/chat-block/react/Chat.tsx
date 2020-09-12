import React from 'react'

interface ChatProps { }

const Chat: StorefrontFunctionComponent<ChatProps> = ({ }) => {
  return (
  <>
    <iframe src="https://d245xyuc29imlb.cloudfront.net/index.html" width="500px" height="500px"></iframe>
  </>
  )
}

Chat.schema = {
  title: 'editor.chat.title',
  description: 'editor.chat.description',
  type: 'object',
  properties: {},
}

export default Chat
