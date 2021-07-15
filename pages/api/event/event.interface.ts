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
  description?: string
  headerImage: string
  status: string
  venue: string
  photos: string[]
}
