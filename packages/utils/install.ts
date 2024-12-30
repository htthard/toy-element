import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]) {
  const installer = (app: App) => {
    each(components, (c) => app.use(c));
  };
  return installer as Plugin;
}

export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    if (name) {
      app.component(name, comp as Plugin);
    }
  };
  return comp as SFCWithInstall<T>;
};
