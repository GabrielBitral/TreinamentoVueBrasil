<template>
  <header class="header">
    <div class="header-group">
        <div class="flex items-center justify-between py-10">
          <div class="w-28 lg:w-36">
          <img
            class="w-full"
            src="../../assets/images/logo_white.png"
            alt="logo"
          />
        </div>

        <div class="flex">
          <button
            id="header-create-account-button"
            @click="() => emit('create-account')"
            class="px-6 py-2 font-bold rounded-full text-white focus:outline-none"
          >
            Create a new account
          </button>
          <button
            id="header-login-button"
            @click="() => emit('login')"
            class="px-6 py-2 font-bold bg-white rounded-full text-brand-cian focus:outline-none"
          >
            Login
          </button>
        </div>
      </div>

      <div class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-white">
          Have a feedbacker <br>
          And make your customers more <br class="hidden lg:inline-block">
          happy!
        </h1>
        <p class="text-lg font-medium text-white">
          Receive ideas, complaints and feedback with a <br class="hidden lg:inline-block">
          simple widget on your page.
        </p>
        <div>
          <button
            @click="() => emit('create-account')"
            id="cta-create-account-button"
            class="px-6 py-2 mt-10 font-bold bg-white rounded-full text-brand-cian focus:outline-none"
          >
          Create a free account
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup (_, { emit }) {
    return { emit }
  }
}
</script>
<style lang="postcss" scoped>
.header {
  @apply bg-brand-cian w-full flex justify-center;
  height: 700px;
}

.header-group {
  @apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 640px) {
  .header-group {
    background-image: url(../../assets/images/blue_balloons.png);
    background-size: 628px;
    background-position: 90% 100%;
    background-repeat: no-repeat;
  }
}
</style>
