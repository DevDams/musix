<template>
  <div>
    <div class="box relative bg-white h-72 border-2 border-gray-200 shadow-xl rounded-lg py-2 px-2">
      <div class="title w-full">
        <h2 class="font-semibold text-xl text-center">Modifier le profil</h2>
        <img src="~/assets/svg/cross.svg" alt="cross icon" class="absolute right-2 top-2 w-7" @click="closeEdit">
      </div>
      <form action="" class="mt-4">
        <div class="username">
          <input type="text" name="username" id="username" class="w-full h-12 px-2 border-2 border-gray-200 shadow-sm rounded-lg">
        </div>
        <div class="bio mt-4">
          <textarea name="bio" id="bio" class="w-full h-28 px-2 py-2 border-2 border-gray-200 shadow-sm rounded-lg"></textarea>
        </div>
        <div class="submit_btn">
          <button type="submit" class="submit text-center font-medium mt-1 px-10 py-1 text-white rounded-full">Enregistrer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeEdit () {
      this.$emit('closeEdit', false)
    }
  }
}
</script>

<style scoped>
.box {
  width: 400px;
}

input, textarea {
  outline: none;
}

input:focus, textarea:focus {
  border-color: #42acf2;
}

textarea {
  resize: none;
}

.submit_btn {
  text-align: center;
}

.submit {
  background: linear-gradient(45deg, #b042f2, #42acf2);
}

@media (max-width: 440px) {
  .box {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
