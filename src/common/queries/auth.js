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

//  `${API_URL}/api/user/me/`
export const rotateToken = async (url, access, refresh) => {
  let fetchRes = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
    method: 'GET',
    redirect: 'follow',
  })
  let data = await fetchRes.json()
  if (
    data.code === 'token_not_valid' ||
    data.code === 'bad_authorization_header'
  ) {
    const refreshToken = await fetch(`${API_URL}/api/token/refresh/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh,
      }),
    })

    const refreshedToken = await refreshToken.json()
    setCookies(res, refreshedToken.access, refresh)
    fetchRes = await fetch(`${API_URL}/api/user/me/`, {
      headers: {
        Authorization: `Bearer ${refreshToken.access}`,
      },
      method: 'GET',
      redirect: 'follow',
    })
    data = await refreshedToken.json()
  }

  return data
}
