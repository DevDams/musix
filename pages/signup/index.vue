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
            <div class="signup_btn">
              <nuxt-link to="/signup">
                <button class="bg-myblue text-white text-lg font-medium rounded-full px-28 py-2">S'inscrire</button>
              </nuxt-link>
            </div>
            <div class="login_btn mt-3">
              <nuxt-link to="/login">
                <button class="text-lg font-medium rounded-full px-24 py-2 border-2 border-light-blue">Se connecter</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="signup">
      <div class="overlay w-screen h-full absolute top-0 left-0"></div>
      <div class="signup_form absolute bg-white rounded-lg py-4 px-6 w-96">
        <!-- <p class="text-center font-bold text-3xl">S'incrire sur musix</p> -->
        <form action="/signup" method="post" class="bg-white rounded-lg flex flex-col">
          <div class="field flex flex-col">
            <label for="full name" class="font-medium text-lg">
              Nom complet
            </label>
            <input type="text" name="fullname" id="fullname" autocomplete="off" placeholder="votre nom complet" required class="mt-1 rounded-lg outline-none h-12 pl-2">
          </div>
          <div class="field flex flex-col mt-3">
            <label for="email" class="font-medium text-lg">
              Email
            </label>
            <input type="email" name="email" id="email" autocomplete="off" placeholder="votre email" required class="mt-1 rounded-lg outline-none h-12 pl-2">
          </div>
          <div class="field flex flex-col mt-3">
            <label for="username" class="font-medium text-lg">
              Nom d'utilisateur
            </label>
            <input type="text" name="username" id="username" autocomplete="off" placeholder="votre nom d'utilisateur" required class="mt-1 rounded-lg outline-none h-12 pl-2">
          </div>
          <div class="field flex flex-col mt-3">
            <label for="pseudo" class="font-medium text-lg">
              Pseudo
            </label>
            <input type="text" name="pseudo" id="pseudo" autocomplete="off" placeholder="votre pseudo" required class="mt-1 rounded-lg outline-none h-12 pl-2">
          </div>
          <div class="field flex flex-col mt-3">
            <label for="password" class="font-medium text-lg">
              Mot de passe
            </label>
            <input type="password" name="password" id="password" placeholder="votre mot de passe" required class="mt-1 rounded-lg outline-none h-12 pl-2">
          </div>
          <div class="submit-btn">
            <button type="submit" class="w-full h-10 bg-myblue rounded-full text-white font-medium mt-6">S'incrire</button>
          </div>
        </form>
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

.signup .signup_form {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.signup .overlay {
  background: rgba(0, 0, 0, 0.171);
}

.signup form input {
  border: 2px solid rgb(221, 221, 221);
}

.signup form input:focus-within {
  border: 2px solid #3bb4ff54;
  box-shadow: 0 3px 20px -17px black;
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

  .landing .content-link .signup_btn button {
    padding: 6px 95px;
  }

  .landing .content-link .login_btn button {
    padding: 6px 80px;
  }
}
</style>
