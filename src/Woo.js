import crypto from 'crypto'
import OAuth from 'oauth-1.0a'

class Woo {
  constructor(key, secret) {
    this.key = key
    this.secret = secret
  }
  request = (url, method) => {
    const oauth = OAuth({
      consumer: {
        key: this.key,
        secret: this.secret
      },
      signature_method: 'HMAC-SHA256',
      hash_function(base_string, key) {
        return crypto
          .createHmac('sha256', key)
          .update(base_string)
          .digest('base64')
      },
    }).authorize({
      url: url,
      method: method
    })

    // add this in case using different API endpoint
    let urlObject = new URL(url)
    const urlQueryKeys = [...urlObject.searchParams.keys()]

    const queryFromUrl = urlQueryKeys.map(
      (key) => {
        const value = urlObject.searchParams.get(key)
        return encodeURIComponent(key) + '=' + encodeURIComponent(value)
      }
    ).join('&')

    const queryFromOauth = Object.keys(oauth).map(
      (key) => {
        const value = oauth[key]
        return encodeURIComponent(key) + '=' + encodeURIComponent(value)
      }
    ).join('&')

    let newUrl = `${urlObject.origin}${urlObject.pathname}?${queryFromUrl}&${queryFromOauth}`

    return fetch(newUrl, { method: method }).then(res => res.json())
  }
}

export default Woo