import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { List, InputItem, WhiteSpace, Button, Radio } from 'antd-mobile'
import { observable, action } from 'mobx'

import Logo from 'components/Logo'
import * as styles from './style.scss'

const RadioItem = Radio.RadioItem
const Item = List.Item
export interface IP {
    routerStore: RouterStore
    userStore: IUserStore.UserStore
}

@inject('userStore', 'routerStore')
@observer
class Register extends React.Component<IP> {
    @observable
    private user: string = ''
    @observable
    private pwd: string = ''
    @observable
    private confirmPasswrord: string = ''
    @observable
    private type: string = 'genius'

    @action
    handleChange = (type: string) => {
        this.type = type
    }

    @action
    handleUsername = (user: string) => {
        this.user = user
    }

    @action
    handlePassword = (pwd: string) => {
        this.pwd = pwd
    }

    @action
    handleConfirmPassword = (confirmPasswrord: string) => {
        this.confirmPasswrord = confirmPasswrord
    }

    handleRegister = () => {
        this.props.userStore.register(
            this.user,
            this.pwd,
            this.confirmPasswrord,
            this.type
        )
    }

    render() {
        const options = [
            { value: 'genius', label: '牛人' },
            { value: 'boss', label: 'BOSS' }
        ]
        const renderRadio = options.map(v => (
            <RadioItem
                checked={v.value === this.type}
                key={v.value}
                onChange={() => this.handleChange(v.value)}
            >
                {v.label}
            </RadioItem>
        ))
        return (
            <div className={styles.registerContainer}>
                <Logo />
                <List>
                    <InputItem onChange={this.handleUsername}>用户名</InputItem>
                    <InputItem onChange={this.handlePassword}>密码</InputItem>
                    <InputItem onChange={this.handleConfirmPassword}>
                        确认密码
                    </InputItem>
                    <Item className={styles.amListItem}>{renderRadio}</Item>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.handleRegister}>
                        注册
                    </Button>
                </List>
            </div>
        )
    }
}
export default Register
