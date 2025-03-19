// Always use dark mode
const currentTheme = "dark"
document.documentElement.setAttribute("saved-theme", currentTheme)
localStorage.setItem("theme", currentTheme)

const emitThemeChangeEvent = (theme: "light" | "dark") => {
  const event: CustomEventMap["themechange"] = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
}

// Emit the theme change event once on load
document.addEventListener("nav", () => {
  // No theme switching functionality
  emitThemeChangeEvent("dark")
})
