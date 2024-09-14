import { createAppSlice } from '../../common/utils/createAppSlice.ts'
import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'

export type AppStatusType = 'failed' | 'idle' | 'loading' | 'succeeded'
const slice = createAppSlice({
  name: 'app',
  initialState: {
    status: 'idle' as AppStatusType,
  },
  reducers: () => ({}),
  extraReducers: builder => {
    builder.addMatcher(isPending, state => {
      state.status = 'loading'
    })
    builder.addMatcher(isFulfilled, state => {
      state.status = 'succeeded'
    })
    builder.addMatcher(isRejected, state => {
      state.status = 'failed'
    })
  },
  selectors: {
    selectStatus: state => state.status,
  },
})

export const appReducer = slice.reducer
export const { selectStatus } = slice.selectors
