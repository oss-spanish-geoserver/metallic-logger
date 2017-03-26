import LoggerInterface from './logger-interface'
import { ListenerInterface } from 'metallic-listeners'

export default class Logger extends LoggerInterface {
  constructor (logger, reopenFileStreamsListeners) {
    super()
    this.provider = logger

    if (reopenFileStreamsListeners instanceof ListenerInterface) {
      reopenFileStreamsListeners.listen(() => this.reopenFileStreams())
    }
  }

  reopenFileStreams () {
    this.provider.reopenFileStreams()
  }

  child (requestId) {
    return this.provider.child({ requestId })
  }

  debug () {
    this.provider.debug(...arguments)
  }

  log () {
    this.provider.info(...arguments)
  }

  info () {
    this.provider.info(...arguments)
  }

  warn () {
    this.provider.warn(...arguments)
  }

  error () {
    this.provider.error(...arguments)
  }
}
