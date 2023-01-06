// preload.js

// 所有Node.js API都可以在预加载过程中使用。
// 它拥有与Chrome扩展一样的沙盒。
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector:any, text:any) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  startDrag: (fileName:string) => {
    ipcRenderer.send('ondragstart', path.join(process.cwd(), fileName))
  }
})

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})

