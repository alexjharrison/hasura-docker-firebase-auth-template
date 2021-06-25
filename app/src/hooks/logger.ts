export enum LogLevel {
  DEBUG = 10,
  INFO = 20,
  WARN = 30,
  ERROR = 40,
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function useLogger(name = 'ROOT', level: LogLevel = LogLevel.DEBUG) {
  const isProd = process.env.NODE_ENV === 'production'

  const commonStyle = [
    'padding: .3em',
    'border-radius: 2px',
    'font-size: 1.25em',
    'font-weight: bold',
  ]

  const debugStyle = [
    ...commonStyle,
    'color: #666',
    'background-color: #f6f6f6',
  ].join(';')

  const infoStyle = [
    ...commonStyle,
    'color: #fff',
    'background-color: #0087BD',
  ].join(';')

  const warnStyle = [
    ...commonStyle,
    'font-size: 1.5em',
    'background-color: #FFD300',
    'color: #333',
  ].join(';')

  const errorStyle = [
    ...commonStyle,
    'background-color: #C40233',
    'color: #fff',
    'font-size: 1.75em',
  ].join(';')

  function debug(...args: unknown[]): void {
    if (LogLevel.DEBUG >= level) {
      !isProd && console.log(`%c🙂DEBUG>${name}`, debugStyle, ...args)
    }
  }
  function info(...args: unknown[]): void {
    if (LogLevel.INFO >= level) {
      !isProd && console.log(`%c🤔INFO>${name}`, infoStyle, ...args)
    }
  }
  function warn(...args: unknown[]): void {
    if (LogLevel.WARN >= level) {
      !isProd && console.log(`%c🤕WARN > ${name}`, warnStyle, ...args)
    }
  }
  function error(...args: unknown[]): void {
    if (LogLevel.ERROR >= level) {
      !isProd && console.log(`%c🤮ERROR > ${name}`, errorStyle, ...args)
    }
  }

  return { debug, info, warn, error }
}
