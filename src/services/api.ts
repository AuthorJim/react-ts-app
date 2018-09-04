import { stringify } from 'qs'
import http from 'util/http'
import { Toast } from 'antd-mobile'

import { DEFAULT_HTTP_OPTION } from './contants'

export async function demoRequest(id: string) {
    return http.get(
        'yourPath',
        {
            id
        },
        DEFAULT_HTTP_OPTION
    )
}

export async function testApi(data) {
    return http.get('/blog/list', data)
}
