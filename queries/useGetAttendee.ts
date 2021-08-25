import { useQuery, UseQueryResult } from 'react-query'
import { AttendeeEndpoints } from '../pages/api/attendee'
import { AttendeeData } from '../pages/api/event/event.interface'

const EVENT_ATTENDEES = 'EVENT_ATTENDEES'

export function useGetAttendees(
  eventId: string
): UseQueryResult<AttendeeData[], boolean> {
  return useQuery(
    [EVENT_ATTENDEES, { eventId }],
    AttendeeEndpoints.getAttendeesForEvent
  )
}
