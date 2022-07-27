import { apiInstance } from '../apiInstance'
import { EventData, AttendeeData } from './event.interface'

export async function createEvent(requestData: any): Promise<boolean> {
  const response = await apiInstance.post(`/events`, requestData)
  return response.data.data
}

export async function deleteEvent(id: string): Promise<string | boolean> {
  const response = await apiInstance.delete(`/events/${id}`)
  return response.data.data
}

export async function getEvents(): Promise<EventData[] | boolean> {
  const response = await apiInstance.get('/events/allevents/all')
  return response.data.data as EventData[]
}

export async function getAdminEventList(): Promise<EventData[] | boolean> {
  const response = await apiInstance.get('/events/admineventlist/all')
  return response.data.data as EventData[]
}

export async function getEvent({queryKey}: any): Promise<EventData | boolean> {
  const [_key, { eventId }] = queryKey
  console.log(_key)
  const response = await apiInstance.get(`/events/${eventId}`)
  return response.data.data as EventData
}

export async function getLatestEvents(): Promise<EventData[] | boolean> {
  const response = await apiInstance.get('/events/latest/all')
  return response.data.data as EventData[]
}

export async function updateEvent(eventId: string, eventData: any): Promise<boolean> {
  const response = await apiInstance.put(`/events/${eventId}`, eventData)
  return response.data.data
}

export async function registerEvent(eventID: string, data: AttendeeData): Promise<boolean> {
  const PATH = `/attendees/${eventID}`
  const res = await apiInstance.post(PATH, data)
  return res.data.data
}
