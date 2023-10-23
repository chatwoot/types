import { type WorkingHours } from './WorkingHours'
import { type Channel } from './common/Channel'

type SenderName = 'friendly' | 'professional'

interface Portal {
  name: string | null
  slug: string
}

type ReplyTime = 'in_a_few_minutes' | 'in_a_few_hours' | 'in_a_day'

type TwilioChannelMedium = 'sms' | 'whatsapp'

export interface Inbox {
  allowMessagesAfterResolved: boolean
  autoAssignmentConfig: object | null
  avatarUrl: string | null
  businessName: string | null
  callbackWebhookUrl: string
  channelId: number
  channelType: Channel
  csatSurveyEnabled: boolean
  enableAutoAssignment: boolean
  enableEmailCollect: boolean
  greetingEnabled: boolean
  greetingMessage: string | null
  id: number
  lockToSingleConversation: boolean
  name: string
  outOfOfficeMessage: string | null
  senderNameType: SenderName
  timezone: string
  workingHours: WorkingHours[]
  workingHoursEnabled: boolean
  portal: Portal | null

  // Twitter - Deprecated
  tweetsEnabled: boolean | null

  // WebWidget
  widgetColor: string | null
  websiteUrl: string | null
  hmacMandatory: boolean | null
  welcomeTitle: string | null
  welcomeTagline: string | null
  webWidgetScript: string | null
  websiteToken: string | null
  selectedFeatureFlags: string[]
  replyTime: ReplyTime
  hmacToken: string | null
  preChatFormEnabled: boolean | null
  preChatFormOptions: object | null
  continuityViaEmail: boolean | null

  // Facebook
  pageId: string | null
  reauthorizationRequired: boolean | null

  // Twilio
  messagingServiceSid: string | null
  phoneNumber: string | null
  medium: TwilioChannelMedium | null

  // API
  webhookUrl: string | null
  inboxIdentifier: string | null
  additionalAttributes: object | null

  // WhatsApp
  provider: string | null
  messageTemplates: object[] | null
  providerConfig: object | null

  // Email
  forwardToEmail: string | null
  email: string | null

  imapLogin: string | null
  imapPassword: string | null
  imapAddress: string | null
  imapPort: number | null
  imapEnabled: boolean | null
  microsoftReauthorization: boolean | null
  imapEnableSsl: boolean | null

  smtpLogin: string | null
  smtpPassword: string | null
  smtpAddress: string | null
  smtpPort: number | null
  smtpEnabled: boolean | null
  smtpDomain: string | null
  smtpEnableSslTls: boolean | null
  smtpEnableStarttlsAuto: boolean | null
  smtpOpensslVerifyMode: string | null
  smtpAuthentication: string | null
}
