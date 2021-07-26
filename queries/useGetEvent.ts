import { useQuery, UseQueryResult } from 'react-query'
import { EventEndpoint } from '../pages/api/event'
import { EventData } from '../pages/api/event/event.interface'

const EVENTS_LIST = 'EVENTS_LIST'

export function useGetEvents(): UseQueryResult<EventData[], boolean> {
  return useQuery(EVENTS_LIST, EventEndpoint.getEvents)
}

const EVENT_BY_ID = 'EVENT_BY_ID'

export function useGetEvent(
  eventId: string
): UseQueryResult<EventData, boolean> {
  return useQuery([EVENT_BY_ID,{eventId}], EventEndpoint.getEvent)
}
