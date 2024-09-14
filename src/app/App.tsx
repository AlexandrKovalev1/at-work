import { Router } from './providers/router/router.tsx'
import { Provider } from 'react-redux'
import { store } from './providers/store/store.ts'

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
