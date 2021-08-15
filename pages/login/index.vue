<template>
  <div>
    <div class="login">
      <div class="login_form w-80 mx-auto mt-20">
        <p class="text-3xl font-semibold">Se connecter</p>
        <form action="" class="w-full mt-10">
          <div class="pseudo">
            <input
              v-model="pseudo"
              type="text"
              name="pseudo"
              placeholder="Pseudo"
              required
              class="w-full mt-1 rounded-lg outline-none h-14 pl-2"
              @keyup="allowSubmit"
            />
          </div>
          <div class="password relative mt-3">
            <input
              v-model="password"
              type="password"
              name="password"
              placeholder="Mot de passe"
              id="password"
              required
              class="w-full mt-1 rounded-lg outline-none h-14 pl-2"
              @keyup="allowSubmit"
            />
            <img
              src="~assets/svg/eye-hide.svg"
              alt="eye hide"
              class="absolute top-5 right-4 w-6 h-6 cursor-pointer hidden"
              id="eye_hide"
              @click="showHidePassword"
            />
            <img
              src="~assets/svg/eye-show.svg"
              alt="eye show"
              class="absolute top-5 right-4 w-6 h-6 cursor-pointer"
              id="eye_show"
              @click="showHidePassword"
            />
          </div>
          <div class="alert text-center mt-3" :class="error ? 'block' : 'hidden'">
            <p class="text-red-500">Pseudo et/ou mot de passe incorrect</p>
          </div>
          <div class="submit_btn mt-6">
            <button
              type="submit"
              :class="submit ? 'enable' : 'diseable'"
              class="w-full h-10 bg-myblue rounded-full text-white font-medium"
              @click="login"
            >
              Se connecter
            </button>
          </div>
        </form>
        <p class="text-center mt-3">
          Pas encore inscris ? -
          <nuxt-link to="/signup" class="text-myviolet font-medium"
            >S'inscrire</nuxt-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pseudo: '',
      password: '',
      submit: false,
      error: false
    }
  },
  methods: {
    login () {},
    showHidePassword() {
      const passwordField = document.querySelector('#password')
      const eyeHide = document.querySelector('#eye_hide')
      const eyeShow = document.querySelector('#eye_show')
      if (passwordField.type === 'password') {
        passwordField.setAttribute('type', 'text')
        eyeHide.style.display = 'block'
        eyeShow.style.display = 'none'
      } else {
        passwordField.setAttribute('type', 'password')
        eyeShow.style.display = 'block'
        eyeHide.style.display = 'none'
      }
    },
    allowSubmit () {
      if (this.pseudo !== '' && this.password !== '') {
        this.submit = true
        console.log('fill')
      } else if (this.pseudo !== '' && this.password === '') {
        this.submit = false
      } else if (this.pseudo === '' && this.password !== '') {
        this.submit = false
      } else {
        this.submit = false
      }
    }
  }
}
</script>

<style scoped>
.login_form form input {
  border: 2px solid rgb(221, 221, 221);
}

.login_form form input:focus-within {
  border: 2px solid #3bb4ff54;
  box-shadow: 0 3px 20px -17px black;
}

.login_form form .submit_btn button {
  background: linear-gradient(45deg, #b042f2, #42acf2);
}

.login_form form .submit_btn .enable {
  cursor: pointer;
  opacity: 1;
  pointer-events: fill;
}

.login_form form .submit_btn .diseable {
  cursor: default;
  opacity: 0.7;
  pointer-events: none;
}

@media (max-width: 355px) {
  .login_form {
    width: 88%;
  }
}
</style>
