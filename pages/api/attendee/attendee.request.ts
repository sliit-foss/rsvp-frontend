import { apiInstance } from '../apiInstance'
import { AttendeeData } from '../event/event.interface'

export async function getAttendeesForEvent({
  queryKey,
}: any): Promise<AttendeeData[] | boolean> {
  try {
    const [_key, { eventId }] = queryKey
    console.log(_key)
    const response = await apiInstance.get(`/attendees/${eventId}`)
    return response.data as AttendeeData[]
  } catch (e) {
    throw JSON.stringify(e.response)
  }
}
