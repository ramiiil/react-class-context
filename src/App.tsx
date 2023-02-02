import { PureComponent } from 'react'
import ComponentA from './components/componentA'
import { UserProvider } from './context/index'

class App extends PureComponent {
  render() {
    return (
      <UserProvider value="Ramil">
        <ComponentA />
      </UserProvider>
    )
  }
}

export default App
