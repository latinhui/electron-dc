const { BrowserWindow } = require('@electron/remote')
function nw(e)
{
    let indexMin = new BrowserWindow({
        width: 1000,
        height: 900
    })
    indexMin.loadFile('page/'+e)
    indexMin.on('close',()=>{win=null})
}