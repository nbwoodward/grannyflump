<template>
  <div id="granny-flump">
    <h2 id="slogan">Only the best grandparent names ever.</h2>
    <div id="slogan">{{ slogan }}</div>
    <div id="names">
      <div id="gma">{{ gma }}</div>
      <div id="and">and</div>
      <div id="gpa">{{ gpa }}</div>
    </div>
    <button @click="getGranny()">New Names Please</button>
  </div>
</template>

<script>
import { getSlogan, getRandomNames, decodeString} from '@/data'
export default {
  data() {
    return {
      slogan: '',
      url: '',
    }
  },
  mounted() {
    if (!this.$route.params?.encoded){
      this.getGranny()
    } else if (!this.slogan) {
      this.slogan = getSlogan()
    }
  },
  computed: {
    encoded() {
      return this.$route.params?.encoded
    },
    names() {
      if (!this.encoded) {
        return ["", ""]
      }

      return decodeString(this.encoded)
    },
    gma() {
      return this.names[0]
    },
    gpa() {
      return this.names[1]
    }
  },
  methods: {
    getGranny() {
      this.slogan = getSlogan()

      const [encoded] = getRandomNames()
      this.goToRoute(encoded)
    },
    goToRoute(encoded){
      this.$router.push(`/${encoded}`)
    }
  },
}
</script>
<style scoped>
#header{
  margin-bottom:20px;
}
#slogan {
  margin-bottom: 10px;
  font-size: 16pt;
}
#gma,
#gpa {
  font-size: 24pt;
}
button {
  margin-top: 30px;
}
</style>
