import { type Agent } from './Agent'
import { type AgentBot } from './AgentBot'
import { type Contact } from './Contact'
import type { UnixTimestamp } from './common/UnixTimestamp'

type ContentType = 'text' | 'input_text' | 'input_textarea' | 'input_email' | 'input_select' | 'cards' | 'form' | 'article' | 'incoming_email' | 'input_csat' | 'integrations'

enum MessageType {
  'incoming',
  'outgoing',
  'activity',
  'template'
}

type MessageStatus = 'sent' | 'delivered' | 'read' | 'failed'

export interface Message {
  attachments: object[]
  content: string
  contentAttributes: object
  contentType: ContentType
  conversationId: number
  createdAt: UnixTimestamp
  echoId: string | null
  id: number
  inboxId: number
  messageType: MessageType
  sender: Agent | AgentBot | Contact | null
  sourceId: string | null
  status: MessageStatus
}
