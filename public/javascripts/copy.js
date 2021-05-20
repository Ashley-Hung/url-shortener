/* Copy URL function */
function copyUrl() {
  const copyUrl = document.querySelector('#shortUrl')
  const clipboard = navigator.clipboard

  clipboard.writeText(copyUrl.value).then(() => alert(`Copied the URL：${copyUrl.value}`))
}

module.exports = copyUrl
