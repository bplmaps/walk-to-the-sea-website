//  global Vue OpenSeadragon
'use strict'

import Vue from 'vue'
import OpenSeadragon from 'openseadragon'

Vue.component('OpenSeadragon', {
  props: {
    id: {
      type: String,
      default: 'openseadradon-viewer'
    },
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    i18n: {
      type: Object,
      default: () => {
        return {}
      }
    },
    messages: {
      type: Object,
      default: () => {
        return {
          'Tooltips.FullPage': '',
          'Tooltips.Home': '',
          'Tooltips.ZoomIn': '',
          'Tooltips.ZoomOut': '',
          'Tooltips.NextPage': '',
          'Tooltips.PreviousPage': '',
          'Tooltips.RotateLeft': '',
          'Tooltips.RotateRight': '',
          'Errors.Dzc': '',
          'Errors.Dzi': '',
          'Errors.Xml': '',
          'Errors.ImageFormat': '',
          'Errors.Security': '',
          'Errors.Status': '',
          'Errors.OpenFailed': ''
        }
      }
    }
  },

  data: () => {
    return {
      viewer: null
    }
  },

  updated: () => {
    this.setup()
  },

  mounted () {
    if (!this.viewer && this.options) {
      const _options = this.options
      _options.id = this.id
      this.viewer = OpenSeadragon(_options)
    }
  },

  methods: {
    resolve (object, key) {
      try {
        const _keys = key.split('.')
        let _cursor = object
        for (const _key of _keys) {
          _cursor = _cursor[_key]
        }
        return _cursor
      } catch (e) {
        return null
      }
    }
  },

  template: '<div :id="id" class="absolute inset-0 w-full h-full"></div>'
})
