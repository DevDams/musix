<template>
  <div>
    <div class="navbar bg-white px-6 fixed w-full h-16 bottom-0 flex items-center z-20">
      <div class="navbar_item w-96 mx-auto flex items-center justify-between">
        <nuxt-link to="/home">
          <button class="w-12 h-12 rounded-full flex items-center justify-center">
            <img src="~assets/svg/home-3.svg" alt="home icon" />
          </button>
        </nuxt-link>
        <nuxt-link to="/audios">
          <button class="w-12 h-12 rounded-full flex items-center justify-center">
            <img src="~assets/svg/speaker.svg" alt="audio icon" />
          </button>
        </nuxt-link>
        <nuxt-link to="/post">
          <button class="w-12 h-12 rounded-full flex items-center justify-center">
            <img src="~assets/svg/create.svg" alt="post icon" />
          </button>
        </nuxt-link>
        <nuxt-link to="/profil">
          <button class="w-12 h-12 rounded-full flex items-center justify-center">
            <img src="~assets/svg/user.svg" alt="user icon" />
          </button>
        </nuxt-link>
        <nuxt-link to="/login">
          <button class="w-12 h-12 rounded-full flex items-center justify-center">
            <img src="~assets/svg/exit-2.svg" alt="exit icon" />
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
img {
  width: 28px;
}

.nuxt-link-exact-active button {
  background: #f3f4f6;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.navbar {
  box-shadow: 0 -5px 35px -25px black;
  border-top: 1px solid #eaeaea;
}
</style>
