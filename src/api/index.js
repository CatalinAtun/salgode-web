const BASE_URL = 'https://.us-east-1.amazonaws.com'

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export const createContest = ({ email, name }) =>
  fetch(`${BASE_URL}/production/contests`, {
    method: 'POST',
    body: JSON.stringify({ email, name }),
    headers,
  })

export const updateParticipate = (id, { code }) =>
  fetch(`${BASE_URL}/production/contests/${id}`, {
    method: 'POST',
    body: JSON.stringify({ code }),
    headers,
  })
