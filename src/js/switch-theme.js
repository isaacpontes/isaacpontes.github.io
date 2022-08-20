document.getElementById("themeSwitcher").addEventListener("click", () => {
  switchTheme()
})

function switchTheme () {
  const isLight = document.querySelectorAll(".is-light")
  const isDark = document.querySelectorAll(".is-dark")
  const isWhite = document.querySelectorAll(".is-white")
  const isBlack = document.querySelectorAll(".is-black")
  const hasBackgroundLight = document.querySelectorAll(".has-background-light")
  const hasBackgroundWhite = document.querySelectorAll(".has-background-white")
  const hasBackgroundDark = document.querySelectorAll(".has-background-dark")
  const hasBackgroundBlack = document.querySelectorAll(".has-background-black")
  const hasTextWhite = document.querySelectorAll(".has-text-white")
  const hasTextBlack = document.querySelectorAll(".has-text-black")

  isLight.forEach(element => {
    element.classList.remove("is-light")
    element.classList.add("is-dark")
  })

  isDark.forEach(element => {
    element.classList.remove("is-dark")
    element.classList.add("is-light")
  })

  isWhite.forEach(element => {
    element.classList.remove("is-white")
    element.classList.add("is-black")
  })

  isBlack.forEach(element => {
    element.classList.remove("is-black")
    element.classList.add("is-white")
  })

  hasBackgroundWhite.forEach(element => {
    element.classList.remove("has-background-white")
    element.classList.add("has-background-black")
  })

  hasBackgroundLight.forEach(element => {
    element.classList.remove("has-background-light")
    element.classList.add("has-background-dark")
  })

  hasBackgroundDark.forEach(element => {
    element.classList.remove("has-background-dark")
    element.classList.add("has-background-light")
  })

  hasBackgroundBlack.forEach(element => {
    element.classList.remove("has-background-black")
    element.classList.add("has-background-white")
  })

  hasTextWhite.forEach(element => {
    element.classList.remove("has-text-white")
    element.classList.add("has-text-black")
  })

  hasTextBlack.forEach(element => {
    element.classList.remove("has-text-black")
    element.classList.add("has-text-white")
  })
}
