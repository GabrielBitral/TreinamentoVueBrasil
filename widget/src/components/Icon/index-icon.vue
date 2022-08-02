<template>
  <component :is="name" v-bind="$props"/>
</template>

<script>
import Loading from './Loading-icon.vue'
import Copy from './Copy-icon.vue'
import ChevronDown from './ChevronDown.vue'
import Chat from './Chat-icon.vue'
import Close from './Close-icon.vue'
import Back from './Back-icon.vue'
import Atention from './Atention-icon.vue'
import Check from './Check-icon.vue'

export default {
  components: {
    Loading,
    Copy,
    ChevronDown,
    Chat,
    Close,
    Back,
    Check,
    Atention
    },
  props: {
    name: { type: String, required: true }
  }
}
</script>
