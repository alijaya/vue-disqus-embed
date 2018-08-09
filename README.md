# vue-disqus-embed
Vue Plugin for embedding Disqus.

[See here the Demo](https://alijaya.github.io/vue-disqus-embed/)

## Installation

```bash
npm install --save vue-disqus-embed
```

or

```bash
yarn add vue-disqus-embed
```

## Import

### Global Registration

```javascript
import Vue from 'vue'
import VueDisqusEmbed from 'vue-disqus-embed'

Vue.use(VueDisqusEmbed, {
  shortname: YOUR_DISQUS_SHORTNAME
})
```

### Not Using Webpack

If you don't use webpack (for example in CodePen etc):

```html
<script src="node-modules/vue-disqus-embed/dist/vue-disqus-embed.umd.js"></script>
```

or use unpkg

```html
<script src="https://unpkg.com/vue-disqus-embed/dist/vue-disqus-embed.umd.js"></script>
```

and then you still need to install it:

```javascript
Vue.use(VueDisqusEmbed, {
  shortname: YOUR_DISQUS_SHORTNAME
})
```

## Basic Usage

Create an account at [Disqus](https://disqus.com/) and obtain the `shortname` for your app, 
it's **required** when you register the plugin.

```javascript
Vue.use(VueDisqusEmbed, {
  shortname: YOUR_DISQUS_SHORTNAME
})
```

The next thing that is **important** is, you **can not** use `url` with `hash` mode (if your url have `#/` this thing, it won't work).
So if you use `vue-router`, **make sure it's in `history` mode**.

It is caused by Disqus doesn't support `#/`, but they support `#!/` path.

For every page that has different Disqus thread, you **need** provide `identifier` and `url`, it's required.
The `url` should be the final `url` used in production, and `identifier` need to be unique and not empty.

```html
<template>
  ...
  <vue-disqus-embed :identifier="identifier" :url="url" />
  ...
</template>

<script>
  export default {
    data () {
      return {
        identifier: '',
        url: '',
      }
    },
    mounted() {
      // Could work with async data
      // It needs identifier and url not empty before updated
      fetchData().then((response) => {
        this.identifier = response.identifer
        this.url = response.url
      })
    }
  }
</script>
```

## Example

[See the Demo](https://alijaya.github.io/vue-disqus-embed/) and [the corresponding code](https://github.com/alijaya/vue-disqus-embed/blob/master/src/views/Disqus.vue)

## Caveats

As I have said before, you can not use `hash` mode. Use `history` mode. Or if you really want to use `hash` mode, 
you need to use `hashbang` (`#!/`) rather than `hash` (`#/`).

### Tips for deploying to Static Server

If you are deploying to Github, it would be problematic to use `history` mode. Because if you refresh the page, it will get `404.html` page.
The trick here, you can redirect `404.html` page to the `index.html`. See the source for example.

## Question?

If you have question, just post in [issues](https://github.com/alijaya/vue-disqus-embed/issues).