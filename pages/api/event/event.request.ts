import { apiInstance } from '../apiInstance'
import { EventData, AttendeeData } from './event.interface'

export async function createEvent(requestData: any): Promise<boolean> {
  try {
    const response = await apiInstance.post(`/events`, requestData)
    return response.data
  } catch (e) {
    throw JSON.stringify(e.response)
  }
}

export async function deleteEvent(id: string): Promise<string | boolean> {
  try {
    const response = await apiInstance.delete(`/events/${id}`)
    return response.data
  } catch (e) {
    throw JSON.stringify(e.response)
  }
}

export async function getEvents(): Promise<EventData[] | boolean> {
  try {
    const response = await apiInstance.get('/events')
    return response.data as EventData[]
  } catch (e) {
    console.error(e.message)
    return false
  }
}

export async function getEvent({
  queryKey,
}: any): Promise<EventData | boolean> {
  const [_key, { eventId }] = queryKey
  console.log(_key)
  try {
    const response = await apiInstance.get(`/events/${eventId}`)
    return response.data as EventData
  } catch (e) {
    console.error(e.message)
    return false
  }
}

export async function getLatestEvents(): Promise<EventData[] | boolean> {
  try {
    const response = await apiInstance.get('/events/latest')
    return response.data as EventData[]
  } catch (e) {
    console.error(e.message)
    return false
  }
}

export async function updateEvent(
  eventId: string,
  eventData: any
): Promise<boolean> {
  try {
    const response = await apiInstance.put(`/events/${eventId}`, eventData)
    return response.data
  } catch (e) {
    throw JSON.stringify(e.response)
  }
}

export async function registerEvent(
  eventID: string,
  data: AttendeeData
): Promise<boolean> {
  try {
    const PATH = `/attendees/${eventID}`
    const res = await apiInstance.post(PATH, data)
    return res.data
  } catch (e) {
    throw JSON.stringify(e.response)
  }
}
