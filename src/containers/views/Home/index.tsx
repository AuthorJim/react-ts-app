import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Button } from 'antd-mobile'

import * as styles from './style.scss'

interface IP {
    globalStore: IGlobalStore.GlobalStore
    routerStore: RouterStore
}

@inject('globalStore', 'routerStore')
@observer
class Home extends React.Component<IP> {
    handleClick = () => {}

    render() {
        return (
            <Button type="primary" onClick={this.handleClick}>
                Hello World
            </Button>
        )
    }
}

export default Home
