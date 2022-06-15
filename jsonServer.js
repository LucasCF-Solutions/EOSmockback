// server.js



const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const routerMenu = jsonServer.router(__dirname)
const routerDashboard = jsonServer.router(path.join(__dirname, 'dashboard.json'))
const routerFurnaceHistoricalAlarms = jsonServer.router(path.join(__dirname, 'furnaceHistoricalAlarms.json'))
const routerFurnaceHistoricalAnalysis = jsonServer.router(path.join(__dirname, 'furnaceHistoricalAnalysis.json'))
const routerFurnaceRealTimeAnalysis = jsonServer.router(path.join(__dirname, 'furnaceRealTime.json'))
const routerResourceHistoricalAnalysis = jsonServer.router(path.join(__dirname, 'resourceHistoricalAnalysis.json'))
const routerResourceRealTimeAnalysis = jsonServer.router(path.join(__dirname, 'resourceRealTimeAnalysis.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(routerMenu)
server.use(routerDashboard)
server.use(routerFurnaceHistoricalAlarms)
server.use(routerFurnaceHistoricalAnalysis)
server.use(routerFurnaceRealTimeAnalysis)
server.use(routerResourceHistoricalAnalysis)
server.use(routerResourceRealTimeAnalysis)


server.listen(3000, () => {
  console.log('JSON Server is running: 3000')
})