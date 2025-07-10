# Nuxt Composables
放自定义Hook

需要在 `nuxt.config.ts` 配置

```
imports: {
    dirs: [
      // Scan top-level composables
      '~/composables',
      // ... or scan composables nested one level deep with a specific name and file extension
      '~/composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all composables within given directory
      '~/composables/**'
    ]
  }
```