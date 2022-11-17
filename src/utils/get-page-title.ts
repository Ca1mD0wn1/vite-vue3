import defaultSettings from '@/settings'

const title = defaultSettings.title || '嗨购后台管理系统'

export default function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}