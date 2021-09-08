<template>
  <div>
    <div
      class="
        navbar
        bg-white
        px-6
        fixed
        w-full
        h-16
        bottom-0
        flex
        items-center
        z-20
      "
    >
      <div class="navbar_item w-96 mx-auto flex items-center justify-between">
        <nuxt-link to="/home" class="home_link">
          <button class="w-12 h-12 rounded-xl flex items-center justify-center">
            <img
              src="~assets/svg/home-black.svg"
              alt="home icon"
              :class="homeBlack ? 'block' : 'hidden'"
            />
            <img
              src="~assets/svg/home-white.svg"
              alt="home icon"
              :class="homeWhite ? 'block' : 'hidden'"
            />
          </button>
        </nuxt-link>
        <nuxt-link to="/audios" class="audio_link">
          <button class="w-12 h-12 rounded-xl flex items-center justify-center">
            <img
              src="~assets/svg/music-black.svg"
              alt="music icon"
              class="music"
              :class="audioBlack ? 'block' : 'hidden'"
            />
            <img
              src="~assets/svg/music-white.svg"
              alt="music icon"
              class="music"
              :class="audioWhite ? 'block' : 'hidden'"
            />
          </button>
        </nuxt-link>
        <nuxt-link to="/new/post" class="post_link">
          <button class="w-12 h-12 rounded-xl flex items-center justify-center">
            <img
              src="~assets/svg/create-black.svg"
              alt="create icon"
              :class="postBlack ? 'block' : 'hidden'"
            />
            <img
              src="~assets/svg/create-white.svg"
              alt="create icon"
              :class="postWhite ? 'block' : 'hidden'"
            />
          </button>
        </nuxt-link>
        <nuxt-link to="/profil" class="profil_link">
          <button class="w-12 h-12 rounded-xl flex items-center justify-center">
            <img
              src="~assets/svg/user-black.svg"
              alt="user icon"
              :class="profilBlack ? 'block' : 'hidden'"
            />
            <img
              src="~assets/svg/user-white.svg"
              alt="user icon"
              :class="profilWhite ? 'block' : 'hidden'"
            />
          </button>
        </nuxt-link>
        <nuxt-link to="/login" class="logout_link">
          <button class="w-14 h-14 rounded-xl flex items-center justify-center">
            <img
              src="~assets/svg/exit-black.svg"
              alt="exit icon"
              :class="logoutBlack ? 'block' : 'hidden'"
            />
            <img
              src="~assets/svg/exit-white.svg"
              alt="exit icon"
              :class="logoutWhite ? 'block' : 'hidden'"
            />
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeWhite: true,
      homeBlack: false,
      audioWhite: true,
      audioBlack: false,
      postWhite: true,
      postBlack: false,
      profilWhite: true,
      profilBlack: false,
      logoutWhite: true,
      logoutBlack: false,
    }
  },
  mounted() {
    const home = document.querySelector('.home_link')
    const audio = document.querySelector('.audio_link')
    const post = document.querySelector('.post_link')
    const profil = document.querySelector('.profil_link')
    const logout = document.querySelector('.logout_link')
    if (home.classList.contains('nuxt-link-exact-active')) {
      this.homeWhite = true
      this.homeBlack = false
    } else {
      this.homeWhite = false
      this.homeBlack = true
    }
    if (audio.classList.contains('nuxt-link-exact-active')) {
      this.audioWhite = true
      this.audioBlack = false
    } else {
      this.audioWhite = false
      this.audioBlack = true
    }
    if (post.classList.contains('nuxt-link-exact-active')) {
      this.postWhite = true
      this.postBlack = false
    } else {
      this.postWhite = false
      this.postBlack = true
    }
    if (profil.classList.contains('nuxt-link-exact-active')) {
      this.profilWhite = true
      this.profilBlack = false
    } else {
      this.profilWhite = false
      this.profilBlack = true
    }
    if (logout.classList.contains('nuxt-link-exact-active')) {
      this.logoutWhite = true
      this.logoutBlack = false
    } else {
      this.logoutWhite = false
      this.logoutBlack = true
    }
  },
  methods: {},
}
</script>

<style scoped>
img {
  width: 30px;
}

img.music {
  width: 26px;
}

.navbar {
  height: 75px;
}

.nuxt-link-exact-active button {
  background: linear-gradient(45deg, #b042f2, #42acf2);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.navbar {
  box-shadow: 0 -5px 35px -25px black;
  border-top: 1px solid #eaeaea;
}
</style>
