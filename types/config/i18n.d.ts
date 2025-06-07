import en from "../../render-thread/utils/config/en-locales"; // 路径改成你项目实际路径
import "react-i18next";

// 提取翻译对象的类型结构
export type Translation = typeof en;

declare module "react-i18next" {
  interface CustomTypeOptions {
    // 设置资源类型为你的类型定义
    resources: Translation;
    // 设置默认命名空间，如果你用了命名空间（如 "common"）也可配置
    defaultNS: "translation";
  }
}
