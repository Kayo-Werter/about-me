const chk = document.getElementById('chk')
const linkNavegacao = document.querySelectorAll('.apresentacao__links__navegacao')

 

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  linkNavegacao.forEach(x => x.classList.toggle('dark'));
})

