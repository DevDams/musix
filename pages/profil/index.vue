<template>
  <div class="home relative mx-auto flex">
    <Navbar class="desktop" />
    <MobileNavbar class="mobile pt-10" />
    <div class="content_block relative w-full">
      <div
        class="
          header
          bg-white
          sticky
          top-0
          left-0
          w-full
          h-12
          flex
          items-center
          text-center
          justify-center
          z-20
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
        <div class="profil_text w-full h-38 mt-14 px-6">
          <div>
            <p class="username text-2xl font-semibold">Aimé-Désiré</p>
            <p class="pseudo text-md text-gray-500 font-normal">@dams9ix</p>
            <p class="mt-2 bio">
              Comme projet de fin de formation nous nous lançons dans la création d'un site de rencontre du style de meetic rencontre du style meetic.
            </p>
            <div class="flex items-center mt-2">
              <img src="~assets/svg/calendar.svg" alt="calendar icon">
              <p class="text-gray-500 ml-2">A rejoint MuseX en mars 2021</p>
            </div>
          </div>
        </div>
      </div>
      <div class="user_posts w-full px-6 pt-12 pb-24">
        <!-- Post model -->
        <div class="post flex border py-3 px-2 rounded-lg">
          <div class="pp">
            <div class="pp w-16 h-16 rounded-full bg-indigo-500" @click="para">
              <img src="" alt="">
            </div>
          </div>
          <div class="content ml-3 mt-1 w-full">
            <div class="user_info flex flex-col justify-center">
              <div class="name font-semibold text-lg leading-5">Comme projet comme projet</div>
              <div class="-mt-1">
                <span class="pseudo font-normal text-gray-500">@dams9ix</span>
                <span class="mx-1 text-xl">·</span>
                <span class="text-gray-500 font-normal">15h</span>
              </div>
            </div>
            <div class="description mt-2">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dicta quod quis est temporibus ex deleniti iusto enim quaerat. Mollitia cum nesciunt vitae qui laudantium eaque culpa tempore tenetur di
              </p>
            </div>
            <div class="audio mt-4 w-full">
              <div class="music-player w-full h-16 flex items-center shadow-md rounded-xl border-2 border-gray-600 p-4">
                <div class="controls">
                  <div class="play-pause -mt-1">
                    <img src="~/assets/svg/play.svg" alt="">
                  </div>
                </div>
                <div class="progress-area bg-gray-300 h-0.5 rounded-full w-full ml-3 -mt-1">
                  <div class="progress-bar relative rounded-full"></div>
                  <div class="timer flex items-center justify-between text-md text-gray-500 mt-1">
                    <span class="current">0:00</span>
                    <span class="duration"></span>
                  </div>
                  <audio class="main-audio" src=""></audio>
                </div>
              </div>
            </div>
            <div class="post_action w-11/12 pl-6 flex justify-between mt-4">
              <button class="like flex items-center">
                <img src="~assets/svg/heart-white.svg" alt="heart icon" class="h-6 w-6">
                <span class="ml-1 font-medium text-gray-600">24</span>
              </button>
              <button class="like flex items-center">
                <img src="~assets/svg/share.svg" alt="share icon" class="h-6 w-6">
                <span class="ml-1 font-medium text-gray-600">24</span>
              </button>
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
      const bio = document.querySelector('.description p')
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

/* Music player */

.music-player {
  width: 95%;
  height: 65px;
}

.progress-area .progress-bar {
  height: inherit;
  width: 0;
  background: linear-gradient(90deg, #42ACF2 0%,#B042F2 100%);
}

.progress-area .progress-bar::before {
  position: absolute;
  content: '';
  width: 12px;
  height: 12px;
  border-radius: inherit;
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
  background: inherit;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.progress-area:hover .progress-bar::before {
  opacity: 1;
}

.controls .play-pause img {
  user-select: none;
  width: 28px;
  cursor: pointer;
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

@media (max-width: 637px) {
  .user_posts {
    margin-bottom: 150px;
  }
}

@media (max-width: 465px) {
  .pp {
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 375px) {
  .user_posts {
    padding-left: 14px;
    padding-right: 14px;
  }

  .post {
    font-size: 14px;
  }
}
</style>
