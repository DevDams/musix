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
    </div>
  </div>
</template>

<script>
export default {}
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
