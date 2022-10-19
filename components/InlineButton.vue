<template>
  <span>
    <a
      v-if="!button"
      :class="className"
      :href="href"
      :target="targetBlank ? '_blank' : ''"
    >
      {{ text }}
    </a>
    <button
      v-if="button"
      :class="className"
    >
      {{ text }}
    </button>
  </span>
</template>

<script>
export default {
  name: 'InlineButton',
  props: {
    className: {
      type: String,
      default: 'inline-block px-4 py-1 rounded-full bg-cobalt text-white text-base font-bold'
    },
    button: {
      type: Boolean,
      default: false
    },
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
