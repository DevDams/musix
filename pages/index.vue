<template>
  <div>
    <div class="landing flex flex-col lg:flex-row h-screen">
      <div class="box-left w-full lg:w-1/2 h-72 lg:h-full">
        <img class="w-full h-full" src="~assets/images/intro-cover-1.jpeg" alt="man with laptop and headphone">
      </div>
      <div class="box-right flex items-center justify-center pb-32 lg:pb-0 w-full lg:w-1/2 px-8 lg:px-16 mt-16 lg:mt-0">
        <div class="content">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold">Enregistrez et partagez vos musiques maintenant</h1>
          <h2 class="text-4xl font-normal mt-6">Rejoignez-nous dès aujourd'hui.</h2>
          <div class="content-link mt-16 h-32 flex flex-col justify-between">
            <nuxt-link to="/singup">
              <button class="singup bg-myblue text-xl text-white font-semibold md:w-2/3 lg:w-3/4 py-3 rounded-full">S'inscrire</button>
            </nuxt-link>
            <nuxt-link to="/login">
              <button class="login font-semibold text-xl md:w-2/3 lg:w-3/4 py-3 rounded-full">Se connecter</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.landing .box-left img {
  object-fit: cover;
}

.landing .content .content-link .login {
  border: 2.5px solid #0d0d0d;
}

@media (max-width: 767px) {
  .landing .content .content-link .singup {
    width: 380px;
  }

  .landing .content .content-link .login {
    width: 380px;
  }
}

@media (max-width: 430px) {
  .landing .content .content-link .singup {
    width: 100%;
  }

  .landing .content .content-link .login {
    width: 100%;
  }
}
</style>
