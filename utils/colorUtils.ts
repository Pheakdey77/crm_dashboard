import { defaultColorConfig } from "@/config/defaultColor";
import { siteConfig } from "@/config/site";

export const getColorConfig = () => {
  return {
    ...defaultColorConfig,
    ...siteConfig.colorConfig,
  };
};
