<template>
  <div class="home mx-auto flex">
    <Navbar class="desktop" />
    <MobileNavbar class="mobile" />
    <div class="content_block relative w-full h-screen">
      <div
        class="
          header
          bg-white
          sticky
          top-0
          w-auto
          h-12
          flex
          items-center
          text-center
          justify-center
        "
      >
        <h1 class="text-2xl text-myviolet font-extrabold">Profil</h1>
      </div>
      <div class="profil_info">
        <div class="profil_image relative w-full h-32">
          <div class="banner bg-green-300 h-32 flex items-center justify-center">
            <img src="~assets/svg/picture.svg" alt="picture icon" class="h-12 w-12">
            <div class="edit_banner"></div>
          </div>
          <div class="profil_pic absolute top-16 left-4 bg-indigo-500 h-28 w-28 border-4 border-white rounded-full">
            <img src="" alt="">
          </div>
          <div class="edit_profil absolute top-36 right-4">
            <button class="border border-gray-300 font-semibold px-4 py-1 rounded-full bg-white">Editer le profil</button>
          </div>
        </div>
        <div class="profil_text w-full h-38 mt-12 px-6">
          <div>
            <p class="username text-2xl font-semibold">Aimé-Désiré</p>
            <p class="pseudo text-md text-gray-500 font-normal">@dams9ix</p>
            <p class="mt-2 bio">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus placeat commodi delectus tenetur ullam maiores atque voluptatib rovident obcaecati hic.</p>
            <div class="flex items-center mt-2">
              <img src="~assets/svg/calendar.svg" alt="calendar icon">
              <p class="text-gray-500 ml-2">A rejoint MuseX en mars 2021</p>
            </div>
          </div>
        </div>
      </div>
      <div class="user_posts w-full px-12 pt-12">
        <div class="post flex border">
          <div class="pp">
            <div class="w-16 h-16 rounded-full bg-indigo-500">
              <img src="" alt="">
            </div>
          </div>
          <div class="content ml-3 mt-1">
            <div class="user_info flex items-center">
              <div class="name font-semibold text-lg">Aimé-Désiré</div>
              <div class="pseudo ml-3 font-normal text-gray-500">@dams9ix</div>
            </div>
            <div class="post_description">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus placeat commodi delectus tenetur ullam maiores atque voluptatib rovident obcaecati hic.</p>
            </div>
            <div class="audio">
              <audio src=""></audio>
            </div>
            <div class="post_action">
              <div class="like">❤ 123</div>
              <div class="share">🔁 321</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    para () {
      const bio = document.querySelector('.bio')
      console.log(bio.innerHTML.length)
    }
  },
}
</script>

<style scoped>
.home {
  width: 876px;
}

.mobile {
  display: none;
}

.header {
  border-bottom: 1px solid #eaeaea;
}

.header h1 {
  background: -webkit-linear-gradient(45deg, #b042f2, #42acf2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.content_block {
  border-right: 1px solid #eaeaea;
  border-left: 1px solid #eaeaea;
  margin-left: 256px;
}

.profil_text {
  padding-bottom: 25px;
  border-bottom: 1px solid #e5e7eb;
}

@media (max-width: 996px) {
  .home {
    width: 700px;
  }

  .content_block {
    margin-left: 100px;
  }
}

@media (max-width: 700px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  .home {
    width: 100%;
  }

  .content_block {
    margin-left: 0;
    width: 100%;
  }
}
</style>
