<template>
  <component
    :is="store.currentComponent"
    @select-feedback-type="handleSelectFeedbackType"
    @next="next"
  />
</template>

<script lang="ts">
import useNavigation, { Navigation } from "@/hooks/navigation";
import useStore from "@/hooks/store"
import Success from './Succes-wizard.vue'
import ErrorState from './Error-wizard.vue'
import WriteAFeedback from "./WriteAFeedback.vue";
import SelectFeedbackType from "./SelectFeedbackType.vue";
import { StoreState, setFeedbackType } from "@/store"
import { defineComponent } from "vue"

interface SetupReturn {
  store: StoreState;
  handleSelectFeedbackType(type: string): void;
  next: Navigation['next'];
}

export default defineComponent({
  components: { SelectFeedbackType, WriteAFeedback, Success, Error: ErrorState },
  setup (): SetupReturn{
    const store = useStore()
    const { next } = useNavigation()

    function handleSelectFeedbackType (type: string): void{
      setFeedbackType(type)
    }

    return {
      store,
      next,
      handleSelectFeedbackType
    }
  }
})
</script>
