<template>
  <div class="home mx-auto flex">
    <Navbar class="desktop" />
    <MobileNavbar class="mobile" />
    <div class="content_block relative w-full">
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
        <h1 class="text-2xl text-myviolet font-extrabold">MuseX</h1>
      </div>
      <div class="bg-black click_me text-white px-6 py-3" @click="select">
        <p class="click_text">Click me</p>
      </div>
      <select name="cars" id="cars" class="absolute left-0 top-16" :class="open ? 'block' : 'hidden'">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  mounted() {
    const selec = document.getElementById('cars')
    const btn = document.querySelector('.click_text')
    btn.innerHTML = selec.value
  },
  methods: {
    select () {
      this.open = !this.open
      const selec = document.getElementById('cars')
      const btn = document.querySelector('.click_text')
      if (this.open) {
        selec.size = selec.options.length
      } else {
        selec.size = 1
      }
      btn.innerHTML = selec.value
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
