import * as React from 'react'
import { observer, inject } from 'mobx-react'

import LogoImg from './job.png'

import * as styles from './style.scss'

export interface IP {}

@inject()
@observer
class Logo extends React.Component<IP> {
    render() {
        return (
            <div className={styles.logoContainer}>
                <img src={LogoImg} alt="" />
            </div>
        )
    }
}
export default Logo
