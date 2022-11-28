export const registerMe = async (body) => {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  return data
}

export const logMeIn = async (body) => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
