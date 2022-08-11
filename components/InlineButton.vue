<template>
  <span class="inline-block px-4 py-1 rounded-full bg-cobalt text-white text-base font-bold">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 'InlineButton',
  props: {
    text: {
      type: String,
      default: 'Button Text'
    }
  }
}
</script>
