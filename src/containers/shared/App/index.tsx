/**
 *
 * App
 *
 * 这个组件是每个页面的最外层骨架，所以这里的代码只能存放所有页面公有的， 比如（导航）或者路由
 * 切勿在其他组件引用
 */

import * as React from 'react'
import Loadable from 'react-loadable'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import PageLoading from 'components/PageLoading'

import * as styles from './style.scss'

const Home = Loadable({
    loader: () =>
        import(/* webpackChunkName: "home" */ 'containers/views/Home'),
    loading: PageLoading
})

const Login = Loadable({
    loader: () =>
        import(/* webpackChunkName: "login" */ 'containers/views/Login'),
    loading: PageLoading
})

const Register = Loadable({
    loader: () =>
        import(/* webpackChunkName: "register" */ 'containers/views/Register'),
    loading: PageLoading
})

const NotFoundPage = Loadable({
    loader: () =>
        import(/* webpackChunkName: "notFoundPage" */ 'containers/views/NotFound'),
    loading: PageLoading
})

const AppWrapper = props => (
    <div className={styles.appWrapper}>{props.children}</div>
)

export default function App(props) {
    return (
        <AppWrapper>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route path="*" component={NotFoundPage} />
                    {/* <Route path="/features" component={FeaturePage} />
                    <Route path="" component={NotFoundPage} /> */}
                </Switch>
            </Router>
        </AppWrapper>
    )
}
