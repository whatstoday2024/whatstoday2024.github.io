const memberTokenKey = 'whatstoday'
const memberIdKey = 'whatstodayMember'

function getCookie (key) {
  const str = `; ${document.cookie}`.split(`; ${key}=`)
  if (str.length === 2) return str.pop().split(';').shift()
}

export function getMemberToken () {
  const token = getCookie(memberTokenKey)
  if (token) {
    return `Bearer ${token}`
  } else {
    return null
  }
}

export function getMemberId () {
  return getCookie(memberIdKey)
}

export function setMemberToken (toekn) {
  document.cookie = `${memberTokenKey}=${toekn}`
}

export function setMemberId (idKey) {
  document.cookie = `${memberIdKey}=${idKey}`
}
