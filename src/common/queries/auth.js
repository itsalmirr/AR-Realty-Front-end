export const logMeIn = async (body, url, token) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  return data
}

export const getRequest = async (url, token) => {
  const res = await fetch(url, {
    method: 'GET',
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

export const postRequest = async (url, body, token) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token && `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  return data
}

export const logMeOut = async () => {
  await fetch('/api/auth/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const getMe = async () => {
  const res = await fetch('/api/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  return data
}

export const updateMe = async (body, url, token) => {
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  return data
}
