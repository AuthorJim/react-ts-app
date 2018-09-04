import * as React from 'react'
import { Toast } from 'antd-mobile'

import * as api from 'services/api'

/**
 * 扩展组件/store类以方便调用
 * 集成api, 公用组件
 */

// 分解出来供外部使用
export class ComponentExt<P = {}, S = {}> extends React.Component<P, S> {
    /**
     * antd message
     *
     * @memberof BaseComponentExt
     */
    readonly $toast = Toast
    /**
     * 接口
     *
     * @memberof BaseComponentExt
     */
    readonly api = api
}

export class StoreExt {
    /**
     * antd message
     *
     * @memberof BaseComponentExt
     */
    readonly $toast = Toast
    /**
     * 接口
     *
     * @memberof BaseComponentExt
     */
    readonly api = api
}
