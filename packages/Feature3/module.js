// Nuxt exposes its default route builder logic here
import path from 'path'

// with a lot of pages it might be worth considering a folder pass
// to dynamically create this list

export default function NuxtModule() {


this.nuxt.hook('components:dirs', (dirs) => {
  dirs.unshift({
    path: path.resolve(__dirname, 'components'),
    level: 1, // provide a priority
  })
})


}

