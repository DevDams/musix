<template>
  <div>
    <div class="post">
      <div class="post_form h-64 mx-auto flex flex-col border-2 border-gray-200 shadow-lg mt-20 rounded-xl bg-white z-50">
        <div class="title h-14 w-full px-4 flex items-center justify-end">
          <p class="add text-right rounded-full px-3 py-1 text-sm font-medium text-white bg-myblue shadow-md cursor-pointer">Ajoutez un nouvel audio</p>
        </div>
        <div class="form_field px-4 pt-2 flex">
          <div class="profil_pic w-16 h-16 bg-myviolet rounded-full" @click="para">
            <img src="" alt="">
          </div>
          <div class="filed ml-2 mt-6">
            <form action="">
              <div class="description relative">
                <textarea v-model="content" name="description" id="description" placeholder="Dites quelque chose à propos de cet audio" class="w-96 h-32 p-2 border-2 border-gray-300 rounded-lg"></textarea>
                <div class="description_length absolute bottom-2 right-6 text-right">
                  <span>{{ content.length }}/150</span>
                </div>
              </div>
              <div class="audio_file">
                <input type="file" name="file" id="file" accept="audio/*" required />
              </div>
            </form>
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
      file: ''
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
  background: linear-gradient(120deg, #42ACF2 0%, #B042F2 100%);
}

textarea {
  resize: none;
  outline: none;
  word-wrap: break-word;
}

textarea:focus {
  border-color: #42ACF2;
}

@media (max-width: 520px) {
  .post_form {
    width: 90%;
  }

  .profil_pic {
    width: 50px;
    height: 50px;
  }

  .description textarea {
    width: calc(100% - 50px);
  }
}
</style>
