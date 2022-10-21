<template>
  <span>
    <a
      v-if="!button"
      :class="'inline-block text-center px-4 py-1 rounded-full bg-cobalt text-white text-base font-bold ' + className"
      :href="href"
      :target="targetBlank ? '_blank' : ''"
    >
      {{ text }}
    </a>
    <button
      v-if="button"
      :class="'inline-block text-center px-4 py-1 rounded-full bg-cobalt text-white text-base font-bold ' + className"
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
      default: ''
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
