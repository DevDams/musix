<template>
  <div class="home mx-auto flex">
    <Navbar />
    <div class="content_block relative w-full h-screen">
      <div class="header sticky top-0 w-auto h-12 flex items-center text-center justify-center">
        <h1 class="text-2xl text-myviolet font-bold">MuseX</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home {
  width: 976px;
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
}
</style>
