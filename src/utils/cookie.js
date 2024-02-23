const memberTokenKey = 'whatstoday'
const memberIdKey = 'whatstodayMember'

function getCookie(key){
  const str = `; ${document.cookie}`.split(`; ${key}=`);
  if (str.length === 2) return str.pop().split(';').shift()
}

export function getMemberToken(){
  return getCookie(memberTokenKey)
}

export function getMemberId(){
  return getCookie(memberIdKey)
}
