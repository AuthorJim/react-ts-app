import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { StaticContext } from 'react-router'
import {
    Route,
    withRouter,
    RouteComponentProps,
    RouteProps
} from 'react-router-dom'
import { getCookie } from 'util/index'
import { COOKIE_KEYS } from 'constants/index'

import * as styles from './style.scss'

export interface IP {}

type Props = IP & RouteProps & RouteComponentProps<any, StaticContext>

@inject()
@observer
class PrivateRoute extends React.Component<Props> {
    componentDidMount() {
        const { history } = this.props
        const token = getCookie(COOKIE_KEYS.TOKEN)
        if (!token) {
            history.replace('/login')
        }
    }

    render() {
        const { component: Component, ...rest } = this.props
        return <Route {...rest} render={props => <Component {...rest} />} />
    }
}
export default withRouter(PrivateRoute)
