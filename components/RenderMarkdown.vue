<template>
  <div v-html="html" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { marked } from 'marked'

marked.setOptions({
  smartypants: true
})

export default defineComponent({
  name: 'RenderMarkdown',
  props: {
    source: {
      type: String,
      default: ''
    }
  },
  computed: {
    html () {
      return marked.parse(this.source || '')
    }
  }
})
</script>
