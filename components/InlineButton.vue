<template>
  <a
    class="inline-block px-4 py-1 rounded-full bg-cobalt text-white text-base font-bold"
    :href="href"
    :target="targetBlank ? '_blank' : ''"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'InlineButton',
  props: {
    text: {
      type: String,
      default: 'Button Text'
    },
    href: {
      type: String,
      default: '#'
    },
    targetBlank: {
      type: Boolean,
      default: false
    }
  }
}
</script>
