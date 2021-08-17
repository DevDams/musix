<template>
  <div>
    <div class="navbar w-64 h-screen flex flex-col justify-between px-6">
      <div class="navbar_items pt-10">
        <nuxt-link to="/home">
          <button
            class="
              mt-4
              pl-6
              hover:bg-gray-100
              w-full
              h-12
              rounded-full
              text-xl
              flex
              items-center
              outline-none
            "
          >
            <img src="~assets/svg/home.svg" alt="home icon" />
            <span class="ml-2 font-semibold">accueil</span>
          </button>
        </nuxt-link>
        <nuxt-link to="/audios">
          <button
            class="
              mt-4
              pl-6
              hover:bg-gray-100
              w-full
              h-12
              rounded-full
              text-xl
              flex
              items-center
              outline-none
            "
          >
            <img src="~assets/svg/speaker.svg" alt="home icon" />
            <span class="ml-2 font-semibold">mes audios</span>
          </button>
        </nuxt-link>
        <nuxt-link to="/profil">
          <button
            class="
              mt-4
              pl-6
              hover:bg-gray-100
              w-full
              h-12
              rounded-full
              text-xl
              flex
              items-center
              outline-none
            "
          >
            <img src="~assets/svg/user.svg" alt="home icon" />
            <span class="ml-2 font-semibold">profil</span>
          </button>
        </nuxt-link>
        <nuxt-link to="/post">
          <button
            class="
              mt-4
              pl-6
              hover:bg-gray-100
              w-full
              h-12
              rounded-full
              text-xl
              flex
              items-center
              outline-none
            "
          >
            <img src="~assets/svg/create.svg" alt="home icon" />
            <span class="ml-2 font-semibold">publier</span>
          </button>
        </nuxt-link>
      </div>
      <div class="logout">
        <nuxt-link to="/login">
          <button
            class="
              mb-6
              ml-4
              pl-4
              bg-black
              w-11/12
              h-11
              rounded-full
              flex
              items-center
              outline-none
            "
          >
            <img src="~assets/svg/exit.svg" alt="home icon" />
            <span class="ml-2 text-md text-white font-semibold"
              >Se déconnecter</span
            >
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
  width: 30px;
}

.nuxt-link-exact-active button {
  background: #f3f4f6;
}
@media (max-width: 996px) {
  .navbar {
    width: 120px;
  }

  button {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    padding-left: 0;
  }

  button span {
    display: none;
  }
}
</style>
