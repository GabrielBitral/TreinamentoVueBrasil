<template>
  <div class="box animate__animated animate__fadeInUp animate__faster">
    <div
      :class="{
        'justify-between': canShowAdditionalControlAndInfo,
        'justify-end': !canShowAdditionalControlAndInfo,
      }"
      class="relative w-full flex"
    >
      <button
        v-if="canShowAdditionalControlAndInfo"
        @click="back"
        :disabled="canGoBack"
        :class="{ invisible: canGoBack }"
        class="text-xl text-gray-800 focus:outline-none"
      >
        <icon name="back" :color="colors.gray['800']" />
      </button>
      <p
        v-if="canShowAdditionalControlAndInfo"
        class="text-xl font-black text-center text-brand-cian"
      >
        {{ label }}
      </p>
      <button
        @click="() => emit('close-box')"
        class="text-xl text-gray-800 focus:outline-none"
      >
        <icon size="14" name="close" :color="colors.gray['800']" />
      </button>
    </div>
    <wizard />
    <div class="text-gray-800 text-sm flex" v-if="canShowAdditionalControlAndInfo">
      <icon name="chat" class="mr-1" :color="brandColors.graydark"/>
        widget by
        <span class="ml-1 font-bold">feedbacker</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, SetupContext } from "vue";
import { brand } from '../../../palette';
import colors from 'tailwindcss/colors.js';
import Wizard from '../../components/Wizard/index-wizard.vue'
import Icon from '../../components/Icon/index-icon.vue';
import useStore from "@/hooks/store";
import useNavigation, { Navigation } from "@/hooks/navigation";

interface SetupReturn {
  emit: SetupContext["emit"];
  canGoBack: ComputedRef<boolean>;
  label: ComputedRef<string>;
  canShowAdditionalControlAndInfo: ComputedRef<boolean>;
  brandColors: Record<string, string>;
  back: Navigation['back'];
  colors: Record<string, string>;
}

export default defineComponent({
  emits: ["close-box"],
  components: { Icon, Wizard },
  setup(_, { emit }: SetupContext): SetupReturn {
    const store = useStore();
    const { back } = useNavigation();

    const label = computed<string>(() => {
      if (store.feedbackType === "ISSUE") {
        return "Report a problem";
      }
      if (store.feedbackType === "IDEA") {
        return "Tell us your idea";
      }
      if (store.feedbackType === "OTHER") {
        return "Open your mind";
      }
      return "What do you have in mind?";
    });

    const canGoBack = computed<boolean>(() => {
      return store.currentComponent === "SelectFeedbackType";
    });

    const canShowAdditionalControlAndInfo = computed<boolean>(() => {
      return (
        store.currentComponent !== "Success" &&
        store.currentComponent !== "Error"
      );
    });

    return {
      emit,
      label,
      canGoBack,
      colors,
      brandColors: brand,
      canShowAdditionalControlAndInfo,
      back
    };
  },
});
</script>

<style lang="postcss" scoped>
.box {
  @apply fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-white rounded-xl
  py-5 px-5 flex flex-col items-center shadow-xl select-none;
  width: 400px;
}
</style>
