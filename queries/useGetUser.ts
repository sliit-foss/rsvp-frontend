import { useQuery, UseQueryResult } from 'react-query'
import { UserEndpoints } from '../pages/api/user'
import { UserData } from '../pages/api/user/user.interface'

const USER_INFO = 'USER_INFO'

export function useGetUser(
): UseQueryResult<UserData, boolean> {
  return useQuery([USER_INFO], UserEndpoints.getUserInfo)
}
