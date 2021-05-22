/* Copy URL function */
function copyUrl() {
  const copyUrl = document.querySelector('#shortUrl')
  const clipboard = navigator.clipboard

  if (copyUrl.value) {
    clipboard.writeText(copyUrl.value).then(() => alert(`Copied the URL：${copyUrl.value}`))
  }
}

/* Submit form */
function submitForm(event) {
  const form = document.querySelector('#submit-form')
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
}

/* Click submit button */
function clickSubmit() {
  const form = document.querySelector('#submit-form')
  form.classList.add('was-validated')
}
