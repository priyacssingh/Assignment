export function fetchWrapper(url, method, headerData, bodyData) {

  return fetch(url, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headerData
    },
    body: bodyData ? JSON.stringify(bodyData) : null
  })
}