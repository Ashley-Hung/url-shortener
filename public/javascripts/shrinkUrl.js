/* Shorten URL */
function sample(collection) {
  const index = Math.floor(Math.random() * collection.length)
  return collection[index]
}

function shrinkUrl() {
  //define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collectionEn = []
  const collectionNum = [...numbers]

  // options 從 app.js 傳進來的物件
  collectionEn = collectionEn.concat([...lowerCaseLetters], [...upperCaseLetters])

  const numOfLength = Math.ceil(Math.random() * 4)

  // return the generated password
  let shortUrl = ''
  for (let i = 0; i < numOfLength; i++) {
    shortUrl += sample(collectionNum)
  }
  for (let i = 0; i < 5 - numOfLength; i++) {
    shortUrl += sample(collectionEn)
  }

  return shortUrl
}

/* Copy URL function */
function copyUrl() {
  const copyUrl = document.querySelector('#shortUrl')
  copyUrl.select()
  document.execCommand('copy')
  alert(`Copied the URL：${copyUrl.value}`)
}

module.exports = shrinkUrl
