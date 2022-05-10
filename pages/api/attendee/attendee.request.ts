import { apiInstance } from '../apiInstance'
import { AttendeeData } from '../event/event.interface'

export async function getAttendeesForEvent({ queryKey }: any): Promise<AttendeeData[] | boolean> {
  const [_key, { eventId }] = queryKey
  console.log(_key)
  const response = await apiInstance.get(`/attendees/${eventId}`)
  return response.data.data as AttendeeData[]
}
