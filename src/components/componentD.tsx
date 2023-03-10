import { PureComponent } from 'react'
import { UserConsumer } from '../context/index'

export class ComponentD extends PureComponent {
  render() {
    return (
      <UserConsumer>
        {(userName) => {
          return <div>Assalomu aleykum, {userName}</div>
        }}
      </UserConsumer>
    )
  }
}

export default ComponentD
