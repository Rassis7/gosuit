<template>
  <div>
      <q-uploader
        url="http://localhost:8081/api/upload1"
        ref="uploader"
        method="PUT"
        :filter="filterFiles"
        :auto-expand="true"
        stack-label="Adicione uma foto do produto"
        :extensions="extensionsComputed"
        :hide-upload-button="true"
      />
  </div>
</template>

<script>
export default {
  name: 'uploaderComponent',
  props: {
    extensions: {
      type: String,
      default: '.png, .jpg'
    },
    fileSize: {
      type: Number,
      default: 1
    }
  },
  computed: {
    extensionsComputed () {
      return this.extensions
    }
  },
  methods: {
    uploadFile () {
      return this.$refs.uploader.upload()
    },
    filterFiles (files) {
      const MAX_FILE_SIZE = this.fileSize * 1024 * 1024 /* =2M */
      // returns an Array containing allowed files
      return files.filter((file) => {
        if (file.size >= MAX_FILE_SIZE) {
          this.$q.notify({message: `Tamanho máximo do arquivo é de ${this.fileSize} MB`, icon: 'mood_bad', position: 'top-right'})
          return false
        }
        return true
      })
    }
  }
}
</script>

<style scoped>

</style>
