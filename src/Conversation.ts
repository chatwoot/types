import { type Agent } from './Agent'
import { type Contact } from './Contact'
import { type Team } from './Team'
import { type Channel } from './common/Channel'
import { type ConversationPriority } from './common/ConversationPriority'
import { type ConversationStatus } from './common/ConversationStatus'
import { type UnixTimestamp } from './common/UnixTimestamp'

export interface Conversation {
  accountId: number
  additionalAttributes: object
  agentLastSeenAt: UnixTimestamp
  assigneeLastSeenAt: UnixTimestamp
  canReply: boolean
  contactLastSeenAt: UnixTimestamp
  createdAt: UnixTimestamp
  customAttributes: object
  firstReplyCreatedAt: UnixTimestamp
  id: number
  inboxId: number
  labels: string[]
  lastActivityAt: UnixTimestamp
  muted: boolean
  priority: ConversationPriority
  snoozedUntil: UnixTimestamp | null
  status: ConversationStatus
  unreadCount: number
  uuid: string
  waitingSince: UnixTimestamp

  meta: {
    assignee: Agent
    team: Team
    sender: Contact
    hmacVerified: boolean | null

    // Avoid this attribute and resolve it from Inbox
    channel: Channel
  }

  // Deprecated
  timestamp: UnixTimestamp
}
