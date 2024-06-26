import { isBrowser } from '@ant-design/pro-utils';
import enUSLocal from './en-US';
import itITLocal from './it-IT';
import koKRLocal from './ko-KR';
import zhLocal from './zh-CN';
import zhTWLocal from './zh-TW';
import viVNLocal from './vi-VN';

const locales = {
  'zh-CN': zhLocal,
  'zh-TW': zhTWLocal,
  'en-US': enUSLocal,
  'it-IT': itITLocal,
  'ko-KR': koKRLocal,
  'vi-VN': viVNLocal,
};

type GLocaleWindow = {
  g_locale: keyof typeof locales;
};

export type LocaleType = keyof typeof locales;

export const getLanguage = (): string => {
  // support ssr
  if (!isBrowser()) return 'vi-VN';
  const lang = window.localStorage.getItem('umi_locale');
  return (
    lang || (window as unknown as GLocaleWindow).g_locale || navigator.language
  );
};
export const gLocaleObject = (): Record<string, string> => {
  const gLocale = getLanguage();
  return locales[gLocale as 'zh-CN'] || locales['vi-VN'];
};
