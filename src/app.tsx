import * as React from 'react';
import { runApp, IAppConfig } from 'ice';
import LocaleProvider from '@/components/LocaleProvider';
import { getLocale } from '@/utils/locale';

const locale = getLocale();

// ice背景下如何提供应用实例
const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    addProvider: ({ children }) => (
      <LocaleProvider locale={locale}>{children}</LocaleProvider>
    ),
  },
};
runApp(appConfig);
