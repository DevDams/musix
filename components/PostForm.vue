<template>
  <div>
    <div class="post">
      <div class="post_form h-64 mx-auto flex flex-col border-2 border-gray-200 shadow-lg mt-20 rounded-xl bg-white z-50">
        <div class="title h-14 w-full px-4 flex items-center justify-end">
          <p class="add text-right rounded-full px-3 py-1 text-sm font-medium text-white bg-myblue shadow-md cursor-pointer" @click="sendPost">Ajoutez un nouvel audio</p>
        </div>
        <div class="form_field relative px-3 pt-2" :class="send ? 'active' : 'disactive'">
          <!-- form section -->
          <div class="form flex">
            <div class="pic">
              <div class="profil_pic w-16 h-16 bg-myviolet rounded-full" @click="para">
                <img src="" alt="">
              </div>
            </div>
            <div class="field mr-2 ml-2 mt-6">
              <form action="">
                <div class="description relative">
                  <textarea v-model="content" name="description" id="description" placeholder="Dites quelque chose à propos de cet audio" class="w-96 h-32 p-2 border-2 border-gray-300 rounded-lg" @keyup="contentSize"></textarea>
                  <div class="description_length absolute bottom-3 right-3 text-right">
                    <span class="bg-white font-semibold">{{ content.length }}/150</span>
                  </div>
                </div>
                <div class="audio_file">
                  <input type="file" name="file" id="file" accept="audio/*" required />
                </div>
              </form>
            </div>
          </div>
          <!-- Alert message -->
          <div class="alert_box absolute top-0 left-0 w-full" :class="send ? 'block' : 'hidden'">
            <div class="alert absolute top-16 left-14 border-2 border-gray-300 shadow-md w-96 h-36 rounded-lg bg-white flex flex-col items-center justify-center">
              <p class="text-lg font-semibold w11/12 mx-auto">{{ message }}</p>
              <button @click="closeAlert" :class="alert ? 'block' : 'hidden'" class="bg-black mt-2 text-white font-medium px-6 py-1 rounded-full">Compris</button>
              <button @click="closeSuccess" :class="success ? 'block' : 'hidden'" class="bg-black mt-2 text-white font-medium px-6 py-1 rounded-full">Compris</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as FilePond from 'filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginValidateType from 'filepond-plugin-file-validate-type'
export default {
  data () {
    return {
      content: '',
      file: '',
      message: '',
      send: false,
      alert: false,
      success: false
    }
  },
  mounted () {
    FilePond.registerPlugin(FilePondPluginValidateType)
    // Get a reference to the file input element
    const inputElement = document.querySelector('#file')
    // Create a FilePond instance
    const pond = FilePond.create(inputElement, {
      acceptedFileTypes: ['audio/*'],
      onaddfile:(err, file) => {
        if (err) {
          console.log(err)
        }
        this.file = file.file
      },
      onremovefile: (err, file) => {
        if (err) {
          console.log(err)
        }
        this.file = ''
      }
    })
    return pond
  },
  methods: {
    para () {
      console.log(this.file)
    },
    contentSize () {
      const textarea = document.querySelector('#description')
      if (this.content.length > 150) {
        textarea.value = textarea.value.slice(0, 150)
        this.content = textarea.value.slice(0, 150)
      }
    },
    sendPost () {
      if (this.file === '') {
        this.send = !this.send
        this.alert = !this.alert
        this.message = 'Choisissez un fichier audio s\'il vous plait !'
      } else {
        this.send = !this.send
        this.success = !this.success
        this.message = 'Audio publié avec succès'
      }
    },
    closeAlert () {
      this.send = !this.send
      this.alert = !this.alert
    },
    closeSuccess () {
      this.send = !this.send
      this.success = !this.success
    }
  }
}
</script>

<style scoped>
.post_form {
  width: 500px;
  height: 350px;
}

.title {
  border-bottom: 1px solid rgba(170, 170, 170, 0.207);
}

.title p.add {
  background-color: black;
}

textarea {
  resize: none;
  outline: none;
  word-wrap: break-word;
  box-sizing: content-box;
}

textarea:focus {
  border-color: #42ACF2;
}

.form_field.active .form {
  filter: blur(10px);
}

.alert_box {
  padding: 0;
  height: calc(350px - 3.7rem);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.alert {
  background-color: white;
  z-index: 30;
}

@media (max-width: 520px) {
  .post_form {
    width: 95%;
  }

  .pic {
    width: 15%;
  }

  .pic {
    width: 15%;
  }

  .profil_pic {
    width: 50px;
    height: 50px;
  }

  .field {
    width: 85%;
    margin-right: 0;
  }

  form {
    width: 100%;
  }

  .description textarea {
    width: 93%;
  }
}

@media (max-width: 360px) {
  .post_form {
    height: 380px;
  }
  .title {
    height: 60px;
  }
  .form {
    flex-direction: column;
  }

  .field {
    width: 100%;
    margin-left: 0;
    margin-top: 8px;
  }
}
</style>
