// Nuxt exposes its default route builder logic here
import { createRoutes, relativeTo } from "@nuxt/utils";
import path from "path";
import serveStatic from "serve-static";

// with a lot of pages it might be worth considering a folder pass
// to dynamically create this list
const pages = [
  "pages/notificationSettings",
  "pages/Received",
  "pages/Sent.vue",
  "pages/Trash.vue",
];
export default function NuxtModule() {
  const { routeNameSplitter, trailingSlash } = this.options.router;
  this.extendRoutes((routes) => {
    routes.push(
      ...createRoutes({
        files: pages,
        srcDir: __dirname,
        pagesDir: "pages",
        routeNameSplitter,
        trailingSlash,
      })
    );
  });
  this.addServerMiddleware(serveStatic(path.resolve(__dirname, "static")));

  this.nuxt.hook("components:dirs", (dirs) => {
    dirs.unshift({
      path: path.resolve(__dirname, "components"),
      level: 1, // provide a priority
    });
  });

  this.nuxt.hook("store", (dirs) => {
    dirs.unshift({
      path: path.resolve(__dirname, "store"),
      level: 1, // provide a priority
    });
  });
}
