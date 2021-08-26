<template>
  <div>
    <div class="post">
      <div class="post_form h-64 mx-auto flex flex-col border-2 border-myblue mt-28 rounded-xl bg-white z-50">
        <div class="title h-12 w-full px-4 flex items-center justify-end">
          <p class="text-right rounded-full px-3 py-1 text-sm font-medium">Ajoutez un nouvel audio</p>
        </div>
        <div class="form_field px-4 pt-2 flex">
          <div class="profil_pic w-16 h-16 bg-myviolet rounded-full" @click="para">
            <img src="" alt="">
          </div>
          <div class="filed ml-2 mt-6">
            <form action="">
              <div class="description">
                <textarea v-model="content" name="description" id="description" placeholder="Dites quelque chose à propos de cet audio" class="w-96 h-32 p-2 border-2 border-myblue rounded-lg"></textarea>
                <div class="description_length text-right">
                  <span>{{ content.length }}</span>
                </div>
              </div>
              <div class="audio_file">
                <input type="file" required />
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
export default {
  data () {
    return {
      content: '',
      file: ''
    }
  },
  mounted () {
    // Get a reference to the file input element
    const inputElement = document.querySelector('input[type="file"]')
    // Create a FilePond instance
    const pond = FilePond.create(inputElement, {
      onaddfile:(err, file) => {
        console.log(err, file.file)
      }
    })
    FilePond.setOptions({
      server: './',
    })
    this.file = pond.getFile()
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
  border-bottom: 1px solid rgba(128, 128, 128, 0.425);
}

textarea {
  resize: none;
  outline: none;
  word-wrap: break-word;
  word-break: break-all;
}
</style>
