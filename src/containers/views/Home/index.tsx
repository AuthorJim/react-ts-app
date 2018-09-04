import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { testApi } from '../../../services/api'
import { Button } from 'antd-mobile'
import axios from 'axios'

import * as styles from './style.scss'

interface IP {
    globalStore: IGlobalStore.GlobalStore
    routerStore: RouterStore
}

@inject('globalStore', 'routerStore')
@observer
class Home extends React.Component<IP> {
    handleClick = () => {
        axios.get('/data').then(res => console.log(res))
    }

    render() {
        return (
            <Button type="primary" onClick={this.handleClick}>
                Hello World
            </Button>
        )
    }
}

export default Home
