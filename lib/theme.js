export const THEME_KEY = "tww-theme";

// Runs in <head> before first paint so a stored choice never flashes the wrong theme.
// With nothing stored, no attribute is set and the tokens follow the system preference.
export const themeScript = `try{var t=localStorage.getItem("${THEME_KEY}");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;
