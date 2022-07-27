<template>
  <div class="flex justify-center w-full h-28 bg-brand-cian">
    <header-logged />
  </div>

  <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
    <h1 class="text-4xl font-black text-center text-gray-800">
      Credencials
    </h1>
    <p class="text-lg text-center text-gray-800 font-regular">
      Installation guide and generating your credentials
    </p>
  </div>

  <div class="flex justify-center w-full h-full">
    <div class="flex flex-col w-4/5 max-w-6xl py-10">
      <h1 class="text-3xl font-black text-brand-darkgray">
        Installation and configuration guide
      </h1>
      <p class="mt-10 text-lg text-gray-800 font-regular">
        This here is your api key
      </p>
      <content-loader
        v-if="store.Global.isLoading || state.isLoading"
        class="rounded"
        width="600px"
        height="50px"
      />
      <div
        v-else
        class="flex py-3 pl-5 mt-2 rounded justify-between items-center bg-brand-gray w-full lg:w-1/2">
        <span>{{ store.User.currentUser.apiKey }}</span>
        <div class="flex ml-20 mr-1">
          <icon
            name="copy"
            :color="brandColors.graydark"
            size="24"
            class="cursor-pointer"
          />
          <icon
            name="loading"
            :color="brandColors.graydark"
            size="24"
            class="cursor-pointer ml-3"
          />
        </div>
      </div>
      <p class="mt-5 text-lg text-gray-800 font-regular">
        Put the script below on your website to start getting feedbacks
      </p>

      <content-loader
        v-if="store.Global.isLoading || state.isLoading"
        class="rounded"
        width="600px"
        height="50px"
      />
      <div
        v-else
        class="py-3 pl-5 pr-20 mt-2 rounded bg-brand-gray w-full lg:w-2/3 overflow-x-scroll"
      >
        <pre>&lt;script src="http://GabrielBitral-feedbacker-widget.netlify.app?api_key={{store.User.currentUser.apiKey}}"&gt;&lt;/script&gt;</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import HeaderLogged from '../../components/HeaderLogged'
import ContentLoader from '../../components/ContentLoader'
import Icon from '../../components/Icon'
import useStore from '@/hooks/useStore'
import palette from '../../../palette'

export default {
  components: { HeaderLogged, Icon, ContentLoader },
  setup () {
    const store = useStore()
    const state = reactive({
      isLoading: false
    })

    return {
      state,
      store,
      brandColors: palette.brand
    }
  }
}
</script>
