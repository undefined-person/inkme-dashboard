export const isTokenCloseToExpiring = () => {
  const tokenExpiryTimeString = localStorage.getItem('tokenExpiryTime')

  if (!tokenExpiryTimeString) return false

  const tokenExpiryTime = Date.parse(tokenExpiryTimeString)

  if (isNaN(tokenExpiryTime)) {
    return false
  }

  const currentTime = new Date().getTime()

  // Consider the token to be close to expiring if it's within 5 minutes of expiry
  const bufferTime = 5 * 60 * 1000

  return tokenExpiryTime - currentTime < bufferTime
}
