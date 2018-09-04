import * as React from 'react'
import { observer, inject } from 'mobx-react'

import * as styles from './style.scss'

export interface IP {}

@inject('globalStore', 'routerStore')
@observer
class Login extends React.Component<IP> {
    render() {
        return <div>Login</div>
    }
}
export default Login
