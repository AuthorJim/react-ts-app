import React from 'react'
import { ActivityIndicator } from 'antd-mobile'
import classNames from 'classnames'

import * as styles from './index.scss'

interface IP {
    className?: string
}

function PageLoading(props: IP) {
    const classNamesTop = classNames(styles.pageLoading, props.className)
    return (
        <div className={classNamesTop}>
            <ActivityIndicator className={styles.spin} />
        </div>
    )
}

export default PageLoading
