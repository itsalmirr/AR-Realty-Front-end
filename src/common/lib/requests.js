export const getRequest = async (url, token, ...args) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token && `Bearer ${token}`,
      Dashboard: args[0],
    },
  })

  if (res.status !== 200) {
    return res
  }

  const data = await res.json()
  return data
}

export const postRequest = async (url, body, token) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token && `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })

  if (res.status !== 200) {
    return res
  }

  const data = await res.json()
  return data
}

export const deleteRequest = async (url, token) => {
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token && `Bearer ${token}`,
    },
  })

  if (res.status !== 200) {
    return res
  }

  const data = await res.json()
  return data
}
