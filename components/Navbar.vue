<template>
  <div>
    <div class="navbar fixed w-64 h-screen flex flex-col justify-between px-6">
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
            <img src="~assets/svg/home-black.svg" alt="home icon" class="black" />
            <img src="~assets/svg/home-white.svg" alt="home icon" class="white" />
            <span class="ml-2 font-semibold">Accueil</span>
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
            <img src="~assets/svg/music-black.svg" alt="music icon" class="black music" />
            <img src="~assets/svg/music-white.svg" alt="music icon" class="white music" />
            <span class="ml-2 font-semibold">Mes audios</span>
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
            <img src="~assets/svg/user-black.svg" alt="user icon" class="black" />
            <img src="~assets/svg/user-white.svg" alt="user icon" class="white" />
            <span class="ml-2 font-semibold">Profil</span>
          </button>
        </nuxt-link>
        <nuxt-link to="/new/post">
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
            <img src="~assets/svg/create-black.svg" alt="post icon" class="black" />
            <img src="~assets/svg/create-white.svg" alt="post icon" class="white" />
            <span class="ml-2 font-semibold">Publier</span>
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
            <img src="~assets/svg/exit-white.svg" alt="home icon" />
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

img.music {
  width: 26px;
}

button img.white {
  display: none;
}

button img.black {
  display: block;
}

.nuxt-link-exact-active button {
  background: linear-gradient(45deg, #b042f2, #42acf2);
  color: white;
}

.nuxt-link-exact-active button img.white {
  display: block;
}

.nuxt-link-exact-active button img.black {
  display: none;
}

.post_form {
  background: rgba(0, 0, 0, 0.2);
}

@media (max-width: 996px) {
  .navbar {
    width: 90px;
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

  .logout button {
    margin-left: 0;
    width: 50px;
    height: 50px;
  }

  .logout button img {
    margin-left: -3px;
  }
}
</style>
