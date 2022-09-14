<template>
  <div v-html="html" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { micromark } from 'micromark'

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
      return micromark(this.source || '')
    }
  }
})
</script>
