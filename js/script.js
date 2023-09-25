function ativarLightMode() {
  const chk = document.getElementById('chk')
  const html = document.documentElement;
  chk.addEventListener('change', () => {
    html.classList.toggle('light')
  })
}
ativarLightMode()
