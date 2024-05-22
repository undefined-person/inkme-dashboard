export const isTokenCloseToExpiring = () => {
  const tokenExpiryTime = localStorage.getItem('tokenExpiryTime')
  if (!tokenExpiryTime) return false

  const currentTime = new Date().getTime()
  const expiryTime = new Date(tokenExpiryTime).getTime()

  // Consider the token to be close to expiring if it's within 5 minutes of expiry
  const bufferTime = 5 * 60 * 1000

  return expiryTime - currentTime < bufferTime
}
