// Nuxt exposes its default route builder logic here
import path from 'path'

// with a lot of pages it might be worth considering a folder pass
// to dynamically create this list

export default function NuxtModule() {

  // TODO: Make sure to export shared layout components such as loaders
  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.unshift({
      path: path.resolve(__dirname, 'components/loaders'),
      level: 1, // provide a priority
    })
  })
}
