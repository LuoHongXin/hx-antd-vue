import { i18nChangeLanguage } from '@wangeditor/editor';
const locale = localStorage.getItem('lang') || 'zh_CN';

const langMap = {
  zh_CN: 'zh-CN',
  en_US: 'en',
};
i18nChangeLanguage(langMap[locale] || 'zh-CN');
