export interface CreateEventData {
  name: string
  description?: string
  headerImage: string
  photos: string[]
}

export interface EventData {
  _id: string
  name: string
  host: string
  description: string
  headerImage: string
  status: string
  venue: string
  startTime: number
  endTime: number
  photos: string[]
  tags: string[]
  capacity:number
  attendeeCount:number
  category: string
  speakers: SpeakerData[]
  attendees:AttendeeData[]
}

interface SpeakerData {
  _id: string
  name: string
  description: string
  topic: string
  status: string
  company: string
  photo: string
  twitterURL: string
  linkedInURL: string
}

export interface AttendeeData {
  name: string
  email: string
  organization: string
}

