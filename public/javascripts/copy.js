/* Copy URL function */
function copyUrl() {
  const copyUrl = document.querySelector('#shortUrl')
  copyUrl.select()
  document.execCommand('copy')
  alert(`Copied the URL：${copyUrl.value}`)
}

module.exports = copyUrl
