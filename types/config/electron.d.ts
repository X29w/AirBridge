declare namespace Electron {
  export type IPCChannelMap = {
    "say-hello": { args: [name: string]; return: string };
    "create-window": { args: [name: WindowName]; return: string };
    "close-window": { args: [name: WindowName]; return: string };
    "minimize-window": { args: [name: WindowName]; return: string };
    "maximize-window": { args: [name: WindowName]; return: string };
    "change-language": { args: [language: CustomLanguage]; return: string };
    "on-language-change": { listener: (lang: CustomLanguage) => void };
  };

  export interface CustomWindowConfig<T> extends T {
    loadUrl: string;
    handleEvent?: (win: BrowserWindow) => void;
  }

  export type WindowName = "main" | "settings";

  export type CustomLanguage = "en" | "zh-TW" | "ja";
}
