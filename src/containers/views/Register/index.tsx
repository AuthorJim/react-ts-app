import * as React from 'react'
import { observer, inject } from 'mobx-react'

import * as styles from './style.scss'

export interface IP {}

@inject('globalStore', 'routerStore')
@observer
class Register extends React.Component<IP> {
    render() {
        return <div>Register</div>
    }
}
export default Register
