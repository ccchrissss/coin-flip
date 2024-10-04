document.querySelector('#coinflip-btn').addEventListener('click', refreshPage)

function refreshPage() {
  window.location.reload()
}

// this is not hoisted
// const refreshPage = () => {
//   window.location.reload()
// }
