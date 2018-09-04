import { observable, action } from 'mobx'

import { StoreExt } from 'util/reactExt'

export class UserStore extends StoreExt {
    @observable
    userInfo = null

    login = async (username: string, password: string): Promise<any> => {
        const data = { username, password }
        try {
            const res = await this.api.login(data)
            console.log(res)
        } catch (err) {}
    }
}

export default new UserStore()
