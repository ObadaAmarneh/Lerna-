// Nuxt exposes its default route builder logic here
import { createRoutes, relativeTo } from '@nuxt/utils'
import path from 'path'
import serveStatic from 'serve-static'

// with a lot of pages it might be worth considering a folder pass
// to dynamically create this list
const pages = ['pages/notifications']
export default function NuxtModule() {
  const { routeNameSplitter, trailingSlash } = this.options.router
  this.extendRoutes((routes) => {
    routes.push(...createRoutes({
      files: pages,
      srcDir: __dirname,
      pagesDir: 'pages',
      routeNameSplitter,
      trailingSlash,
    }))
  })
  this.addServerMiddleware(
    serveStatic(path.resolve(__dirname, 'static')),
  )


this.nuxt.hook('components:dirs', (dirs) => {
  dirs.unshift({
    path: path.resolve(__dirname, 'components'),
    level: 1, // provide a priority
  })
})
  const layoutPath = (file) =>
  relativeTo(
    this.options.buildDir,
    path.resolve(__dirname, 'layouts', file),
  )
  
  
  this.nuxt.hook('build:templates', ({ templateVars }) => {
  templateVars.layouts.default = layoutPath('dashboard')
  })

}

