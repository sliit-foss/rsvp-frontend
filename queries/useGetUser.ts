import { useQuery, UseQueryResult } from 'react-query'
import { UserEndpoints } from '../pages/api/user'
import { UserData } from '../pages/api/user/user.interface'

const ALL_USERS = 'ALL_USERS'

export function useGetAllUsers(
): UseQueryResult<UserData[], boolean> {
  return useQuery([ALL_USERS], UserEndpoints.getAllUsers)
}

const USER_INFO = 'USER_INFO'

export function useGetUser(
): UseQueryResult<UserData, boolean> {
  return useQuery([USER_INFO], UserEndpoints.getUserInfo)
}
