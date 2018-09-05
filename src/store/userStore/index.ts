import { observable, action } from 'mobx'

import { StoreExt } from 'util/reactExt'

export class UserStore extends StoreExt {
    @observable
    userInfo = null

    login = async (user: string, pwd: string): Promise<any> => {
        const data = { user, pwd }
        try {
            const res = await this.api.login(data)
            console.log(res)
        } catch (err) {}
    }

    register = async (
        user: string,
        pwd: string,
        confirmPasswrord: string,
        type: string
    ): Promise<any> => {
        if (!user || !pwd || !type) {
            this.$toast.fail('用户名密码必须输入')
            return
        }
        if (confirmPasswrord !== pwd) {
            this.$toast.fail('用户名密码必须输入')
            return
        }
        const data = { user, pwd, type }
        try {
            const res = await this.api.register(data)
            console.log(res)
        } catch (err) {}
    }
}

export default new UserStore()
