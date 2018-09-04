import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile'
import { observable, action } from 'mobx'

import Logo from 'components/Logo'
import * as styles from './style.scss'

export interface IP {
    routerStore: RouterStore
    userStore: IUserStore.UserStore
}

@inject('routerStore', 'userStore')
@observer
class Login extends React.Component<IP> {
    @observable
    private username: string = ''
    @observable
    private password: string = ''

    @action
    handleUsername = (username: string) => {
        this.username = username
    }

    @action
    handlePassword = (password: string) => {
        this.password = password
    }

    handleLogin = async (): Promise<any> => {
        this.props.userStore.login(this.username, this.password)
    }

    handleRegister = () => {
        this.props.routerStore.push('/register')
    }

    render() {
        return (
            <div className={styles.loginContainer}>
                <Logo />
                <List>
                    <InputItem onChange={this.handleUsername}>用户名</InputItem>
                    <WhiteSpace />
                    <InputItem onChange={this.handlePassword} type="password">
                        密码
                    </InputItem>
                    <WhiteSpace />
                    <Button onClick={this.handleLogin} type="primary">
                        登录
                    </Button>
                    <WhiteSpace />
                    <Button onClick={this.handleRegister} type="primary">
                        注册
                    </Button>
                </List>
            </div>
        )
    }
}
export default Login
