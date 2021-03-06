import io from 'socket.io-client'

const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'
export const socketService = createSocketService()

function createSocketService() {
  var socket = null;
  const socketService = {
    async setup() {
      if (socket) return
      socket = io(baseUrl)

    },
    async on(eventName, cb) {
      if (!socket) await socketService.setup()
      socket.on(eventName, cb)
    },
    async off(eventName, cb = null) {
      if (!socket) await socketService.setup()
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    async emit(eventName, data) {
      if (!socket) await socketService.setup()
      socket.emit(eventName, data)
    },
    terminate() {
      socket = null
    }
  }
  return socketService
}