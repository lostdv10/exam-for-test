// main.js

// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow ,Menu, MenuItem ,dialog} = require('electron')
const path = require('path')

// 禁用当前应用程序的硬件加速,否则报错Passthrough is not supported, GL is disabled, ANGLE is
app.disableHardwareAcceleration()

function createWindow () {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts')
    }
  })

  // 加载 index.html
  mainWindow.loadURL('http://127.0.0.1:5174/')
    // NODE_ENV === 'development'
    // ?'http://127.0.0.1:5174/')
    // :`file://${path.join(dirname,'../dist/index.html')}`
  // 打开开发工具
  // mainWindow.webContents.openDevTools()
}
//主菜单and快捷键（控制台输出一段文字）
// const menu = new Menu()
// menu.append(new MenuItem({
//   label: 'Electron',
//   submenu: [{
//     role: 'help',
//     accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
//     click: () => { console.log('Electron console message!') }
//   }]
// }))

// Menu.setApplicationMenu(menu)
//任务栏
app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: 'New Window',
    description: 'Create a new window'
  }
])
app.setUserTasks([])

//任务栏图标
// const win = new BrowserWindow()

// win.setThumbarButtons([
//   {
//     tooltip: 'button1',
//     icon: path.join(__dirname, 'button1.png'),
//     click () { console.log('button1 clicked') }
//   }, {
//     tooltip: 'button2',
//     icon: path.join(__dirname, 'button2.png'),
//     flags: ['enabled', 'dismissonclick'],
//     click () { console.log('button2 clicked.') }
//   }
// ])
//窗口叠加
//win.setOverlayIcon('path/to/overlay.png', 'Description for overlay')
//窗口闪烁
// win.once('focus', () => win.flashFrame(false))
// win.flashFrame(true)
//dialog窗口


// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// 在这个文件中，你可以包含应用程序剩余的所有部分的代码，
// 也可以拆分成几个文件，然后用 require 导入。


