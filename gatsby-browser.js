/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
  }
  
  export const onClientEntry = () => {
    window.onload = () => {
      addScript("https://cdn.jsdelivr.net/npm/typed.js@2.0.12")
    }
  }