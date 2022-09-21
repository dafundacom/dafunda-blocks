module.exports = function (length = 8) {
  const result = []
  let _alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let _number = '0123456789'
  let _special = '--__--'
  let charset = ''
  for (let i = 0; i < length; i++) {
    if (i == 0) charset = _alphabet
    else charset = _alphabet + _number + _special

    result.push(charset.charAt(Math.floor(Math.random() * charset.length)))
  }
  return result.join('')
}
