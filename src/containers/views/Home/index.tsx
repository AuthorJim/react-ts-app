import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { computed } from 'mobx'

import * as styles from './style.scss'

interface IP {
    globalStore: IGlobalStore.GlobalStore
    routerStore: RouterStore
}

@inject('globalStore', 'routerStore')
@observer
class Home extends React.Component<IP> {
    render() {
        return <div>Hello World!</div>
    }
}

export default Home
