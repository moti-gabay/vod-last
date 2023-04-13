
import { AppContext } from './cotext/context'
import AppRoutes from './components/AppRoutes'
import Loading from './components/Loading'
function App() {
  return (
<AppContext.Provider
value={
  {Loading}
}
>
<AppRoutes/> 
</AppContext.Provider>

  )
}
export default App
