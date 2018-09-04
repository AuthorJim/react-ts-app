export function setCookie(name: string, value: string, expiredays = 365) {
    const exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = `${name}=${escape(value)};expires=${exdate.toUTCString()}`
}

export function getCookie(name: string) {
    if (document.cookie.length > 0) {
        let cStart = document.cookie.indexOf(name + '=')
        if (cStart !== -1) {
            cStart = cStart + name.length + 1
            let cEnd = document.cookie.indexOf(';', cStart)
            if (cEnd === -1) {
                cEnd = document.cookie.length
            }
            return unescape(document.cookie.substring(cStart, cEnd))
        }
    }
    return ''
}

export function clearCookie(name: string) {
    setCookie(name, '')
}

export function copyToClipboard(text: string): void {
    const aux = document.createElement('textarea')
    aux.innerHTML = text
    document.body.appendChild(aux)
    aux.select()
    document.execCommand('copy')
    document.body.removeChild(aux)
}
