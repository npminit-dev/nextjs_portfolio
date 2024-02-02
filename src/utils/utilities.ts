export function sleep(ms: number) {
  return new Promise(res => setTimeout(res, ms))
}

export const linkOnNewTab = (link: string) => () => globalThis.open(link)