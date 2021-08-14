<template>
  <div>
    <div class="landing flex flex-col md:flex-row h-screen">
      <div class="box-left w-full md:w-1/2 h-72 md:h-full">
        <img
          class="w-full h-full"
          src="~assets/images/intro-cover-1.jpeg"
          alt="man with laptop and headphone"
        />
      </div>
      <div
        class="
          box-right
          flex
          items-center
          justify-center
          pb-10
          lg:pb-0
          w-full
          lg:w-1/2
          px-8
          lg:px-16
          mt-16
          lg:mt-0
        "
      >
        <div class="content">
          <h1 class="font-bold text-6xl">
            Enregistrez et partagez vos musiques maintenant
          </h1>
          <h2 class="font-normal text-2xl mt-6 mb-6">
            Rejoingnez nous dès aujourd'hui
          </h2>
          <div class="content-link flex flex-col">
            <div class="signup_btn">
              <nuxt-link to="/signup">
                <button
                  class="
                    bg-myblue
                    text-white text-lg
                    font-medium
                    rounded-full
                    px-28
                    py-2
                  "
                >
                  S'inscrire
                </button>
              </nuxt-link>
            </div>
            <div class="login_btn mt-3">
              <nuxt-link to="/login">
                <button
                  class="
                    text-lg
                    font-medium
                    rounded-full
                    px-24
                    py-2
                    border-2 border-light-blue
                  "
                >
                  Se connecter
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="signup absolute flex justify-center w-full h-full top-0 left-0">
      <div
        class="overlay bg-myviolet w-screen h-screen fixed top-0 left-0"
      ></div>
      <div
        class="
          signup_form
          absolute
          bg-white
          rounded-lg
          py-2
          px-6
          w-96
          mt-16
          md:border-0
          shadow-lg
        "
      >
        <p class="text-center text-xl font-bold text-myviolet">
          S'inscrire sur Musix
        </p>
        <form
          action="/signup"
          method="post"
          class="bg-white rounded-lg flex flex-col mt-6"
        >
          <div class="field flex flex-col">
            <label for="full name" class="font-medium text-md">
              Nom complet
            </label>
            <input
              v-model="fullName"
              type="text"
              name="fullName"
              id="fullname"
              autocomplete="off"
              placeholder="votre nom complet"
              required
              class="mt-1 rounded-lg outline-none h-12 pl-2"
            />
          </div>
          <div class="field flex flex-col mt-2">
            <label for="email" class="font-medium text-md"> Email </label>
            <div class="email_field relative">
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                autocomplete="off"
                placeholder="votre email"
                required
                @input="validEmail"
                class="w-full mt-1 rounded-lg outline-none h-12 pl-2"
              />
              <span
                class="
                  absolute
                  top-4
                  right-4
                  bg-green-300
                  text-white
                  font-medium
                  px-2
                  rounded-lg
                  hidden
                "
                id="email_badge"
                >{{ emailState }}</span
              >
            </div>
          </div>
          <div class="field flex flex-col mt-2">
            <label for="username" class="font-medium text-md">
              Nom d'utilisateur
            </label>
            <input
              v-model="userName"
              type="text"
              name="userName"
              id="username"
              autocomplete="off"
              placeholder="votre nom d'utilisateur"
              required
              class="mt-1 rounded-lg outline-none h-12 pl-2"
            />
          </div>
          <div class="field flex flex-col mt-2">
            <label for="pseudo" class="font-medium text-md"> Pseudo </label>
            <div class="pseudo_field relative">
              <input
                v-model="pseudo"
                type="text"
                name="pseudo"
                id="pseudo"
                autocomplete="off"
                placeholder="votre pseudo"
                required
                @input="validPseudo"
                class="w-full mt-1 rounded-lg outline-none h-12 pl-2"
              />
              <span
                class="
                  absolute
                  top-4
                  right-4
                  bg-green-300
                  text-white
                  font-medium
                  px-2
                  rounded-lg
                  hidden
                "
                id="pseudo_badge"
                >{{ pseudoState }}</span
              >
            </div>
          </div>
          <div class="field flex flex-col mt-2">
            <label for="password" class="font-medium text-md">
              Mot de passe
            </label>
            <div class="password_field relative">
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                placeholder="votre mot de passe"
                required
                @input="validPassword"
                class="w-full mt-1 rounded-lg outline-none h-12 pl-2"
              />
              <span
                class="
                  absolute
                  top-4
                  right-12
                  bg-green-300
                  text-white
                  font-medium
                  px-2
                  rounded-lg
                  hidden
                "
                id="password_badge"
                >{{ passwordState }}</span
              >
              <img
                src="~assets/svg/eye-hide.svg"
                alt="eye hide"
                class="absolute top-4 right-4 w-6 h-6 cursor-pointer hidden"
                id="eye_hide"
                @click="showHidePassword"
              />
              <img
                src="~assets/svg/eye-show.svg"
                alt="eye show"
                class="absolute top-4 right-4 w-6 h-6 cursor-pointer"
                id="eye_show"
                @click="showHidePassword"
              />
            </div>
          </div>
          <div class="submit-btn">
            <button
              type="submit"
              :class="submit ? 'enable' : 'diseable'"
              class="
                w-full
                h-10
                bg-myblue
                rounded-full
                text-white
                font-medium
                mt-6
              "
            >
              S'inscrire
            </button>
          </div>
          <p class="text-sm text-center mt-2">
            Vous avez déjà un compte ? -
            <nuxt-link to="/login" class="text-myviolet underline"
              >Connectez-vous</nuxt-link
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordState: 'Faible',
      emailState: 'Email invalide',
      pseudoState: '',
      fullName: '',
      email: '',
      goodEmail: false,
      userName: '',
      pseudo: '',
      goodPseudo: false,
      password: '',
      goodPassword: false,
      submit: false,
    }
  },
  methods: {
    redisterUser() {},
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
    validEmail() {
      const emailBadge = document.querySelector('#email_badge')
      const email = document.querySelector('#email').value
      // valid email regex pattern
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
      if (email.match(emailPattern)) {
        this.emailState = 'Ok'
        emailBadge.style.display = 'block'
        emailBadge.style.backgroundColor = '#6ee7b7'
        this.goodEmail = true
      } else {
        emailBadge.style.display = 'block'
        emailBadge.style.backgroundColor = '#f87171'
        this.emailState = 'Email invalide'
        this.goodEmail = false
      }
      if (email !== '') {
        emailBadge.style.display = 'block'
      } else {
        emailBadge.style.display = 'none'
      }
      // Check if the user enter a good email, pseudo and password
      if (this.goodEmail && this.goodPseudo && this.goodPassword) {
        this.submit = true
      } else {
        this.submit = false
      }
    },
    validPseudo() {
      const pseudoField = document.querySelector('#pseudo').value
      const pseudoBadge = document.querySelector('#pseudo_badge')
      if (pseudoField.length > 0 && pseudoField.length <= 4) {
        this.pseudoState = 'trop court'
        pseudoBadge.style.backgroundColor = '#f87171'
        pseudoBadge.style.display = 'block'
        this.goodPseudo = false
      } else if (pseudoField.length > 4) {
        this.pseudoState = ''
        pseudoBadge.style.display = 'none'
        this.goodPseudo = true
      } else if (pseudoField.length === 0) {
        this.pseudoState = ''
        pseudoBadge.style.display = 'none'
        this.goodPseudo = false
      }
      // Check if the user enter a good email, pseudo and password
      if (this.goodEmail && this.goodPseudo && this.goodPassword) {
        this.submit = true
      } else {
        this.submit = false
      }
    },
    strongChecker(password) {
      const strengthBadge = document.querySelector('#password_badge')
      // Strong and weak password regex pattern checker
      const strongPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/
      const mediumPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,}$/
      const mediumPassword2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/
      // test password
      if (strongPassword.test(password)) {
        strengthBadge.style.backgroundColor = '#6ee7b7'
        this.passwordState = 'Fort'
      } else if (mediumPassword.test(password)) {
        strengthBadge.style.backgroundColor = '#93c5fd'
        this.passwordState = 'Moyen'
      } else if (mediumPassword2.test(password)) {
        strengthBadge.style.backgroundColor = '#93c5fd'
        this.passwordState = 'Moyen'
      } else {
        strengthBadge.style.backgroundColor = '#f87171'
        this.passwordState = 'Faible'
      }
    },
    validPassword() {
      let timeout = 0
      const passwordField = document.querySelector('#password')
      const strengthBadge = document.querySelector('#password_badge')
      // The badge is hide by default
      strengthBadge.style.display = 'block'
      clearTimeout(timeout)
      // we then call the strongChecker function as a callback
      timeout = setTimeout(() => {
        if (passwordField.value.length >= 6) {
          this.strongChecker(passwordField.value)
        } else {
          return ''
        }
      }, 300)
      // In case the user clear the text, the badge is hidden again
      if (passwordField.value.length >= 6) {
        strengthBadge.style.display = 'block'
        this.goodPassword = true
      } else {
        strengthBadge.style.display = 'none'
        this.goodPassword = false
      }
      // Check if the user enter a good email, pseudo and password
      if (this.goodEmail && this.goodPseudo && this.goodPassword) {
        this.submit = true
      } else {
        this.submit = false
      }
    },
  },
}
</script>

<style scoped>
.landing .box-left img {
  object-fit: cover;
}

.signup form input {
  border: 2px solid rgb(221, 221, 221);
}

.signup form input:focus-within {
  border: 2px solid #3bb4ff54;
  box-shadow: 0 3px 20px -17px black;
}

.signup form .submit-btn .enable {
  cursor: pointer;
  opacity: 1;
  pointer-events: fill;
}

.signup form .submit-btn .diseable {
  cursor: default;
  opacity: 0.7;
  pointer-events: none;
}

@media (max-width: 460px) {
  .landing .content h1 {
    font-size: 48px;
  }

  .landing .content h2 {
    font-size: 20px;
  }
}

@media (max-width: 400px) {
  .signup_form {
    width: 98%;
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
