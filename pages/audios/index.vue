<template>
  <div class="home mx-auto flex">
    <Navbar class="desktop" />
    <MobileNavbar class="mobile" />
    <div class="content_block relative w-full h-full">
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
        <h1 class="text-2xl text-myviolet font-extrabold">Mes audios</h1>
      </div>
      <div class="intro-text sticky top-0 px-3 py-3 bg-gray-50 z-30">
        <p class="text-xl font-medium w-96">
          Gérez tous vos audios, supprimez-les ou modifiez leur description.
        </p>
      </div>
      <div class="all_post px-6 mt-10 pb-24">
        <!-- Post model -->
        <div class="post relative flex border py-3 px-2 mb-11 rounded-lg">
          <!-- Alert message -->
          <div class="absolute top-0 left-0 rounded-lg alert_box w-full h-full bg-white flex items-center justify-center" :class="trashPost ? 'block' : 'hidden'">
            <div class="alert border-2 w-3/4 h-40 rounded-lg border-gray-200 bg-white flex flex-col items-center justify-center shadow-xl">
              <p class="text-lx font-medium">Etes-vous sur de vouloir supprimer ce poste ?</p>
              <div class="btn w-40 flex items-center justify-around mt-3">
                <button class="px-4 font-medium py-px border-2 border-black rounded-xl">Oui</button>
                <button class="px-4 font-medium py-1 bg-black text-white rounded-xl" @click="cancelDelete">Non</button>
              </div>
            </div>
          </div>
          <div class="pp">
            <div class="pp w-16 h-16 rounded-full bg-indigo-500">
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
              <button class="like flex items-center" @click="like = !like">
                <img src="~assets/svg/heart-white.svg" alt="heart icon" class="h-6 w-6" :class="like ? 'hidden' : 'block'">
                <img src="~assets/svg/heart-red.svg" alt="heart icon" class="h-6 w-6" :class="like ? 'block' : 'hidden'">
                <span class="ml-1 font-semibold text-gray-600" :class="like ? 'like' : ''">24</span>
                <span class="action-text ml-1 font-semibold text-gray-600" :class="like ? 'like' : ''">j'aime</span>
              </button>
              <button class="like flex items-center" @click="deletePost">
                <img src="~assets/svg/trash.svg" alt="share icon" class="h-6 w-6">
                <span class="action-text ml-1 font-semibold text-gray-600">Supprimer</span>
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
  data () {
    return {
      trashPost: false,
      like: false
    }
  },
  methods: {
    deletePost () {
      this.trashPost = !this.trashPost
    },
    cancelDelete () {
      this.trashPost = !this.trashPost
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

.like {
  color: #f03131;
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
  .all_post {
    padding-bottom: 150px;
  }
}

@media (max-width: 580px) {
  .alert {
    width: 90%;
    padding: 0 10px;
    text-align: center;
  }
}

@media (max-width: 465px) {
  .pp {
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 440px) {
  .action-text {
    display: none;
  }
}

@media (max-width: 405px) {
  .intro-text p {
    font-size: 17px;
    width: 80%;
  }
}

@media (max-width: 375px) {
  .all_post {
    padding-left: 14px;
    padding-right: 14px;
  }

  .post {
    font-size: 14px;
  }
}
</style>
