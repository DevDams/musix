<template>
  <div>
    <div class="landing flex flex-col md:flex-row h-screen">
      <div class="box-left w-full md:w-1/2 h-72 md:h-full">
        <img class="w-full h-full" src="~assets/images/intro-cover-1.jpeg" alt="man with laptop and headphone">
      </div>
      <div class="box-right flex items-center justify-center pb-16 lg:pb-0 w-full lg:w-1/2 px-8 lg:px-16 mt-16 lg:mt-0">
        <div class="content">
          <h1 class="font-bold text-6xl">Enregistrez et partagez vos musiques maintenant</h1>
          <h2 class="font-normal text-2xl mt-6 mb-6">Rejoingnez nous dès aujourd'hui</h2>
          <div class="content-link flex flex-col">
            <div class="signup">
              <nuxt-link to="/signup">
                <button class="bg-myblue text-white text-lg font-medium rounded-full px-28 py-2">S'inscrire</button>
              </nuxt-link>
            </div>
            <div class="login mt-3">
              <nuxt-link to="/login">
                <button class="text-lg font-medium rounded-full px-24 py-2 border-2 border-light-blue">Se connecter</button>
              </nuxt-link>
            </div>
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

@media (max-width: 460px) {
  .landing .content h1 {
    font-size: 48px;
  }

  .landing .content h2 {
    font-size: 20px;
  }
}

@media (max-width: 365px) {
  .landing .content-link button {
    font-size: 16px;
  }

  .landing .content-link .signup button {
    padding: 6px 95px;
  }

  .landing .content-link .login button {
    padding: 6px 80px;
  }
}
</style>
