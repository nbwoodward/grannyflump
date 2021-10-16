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
      gma: '',
      gpa: '',
      url: '',
    }
  },
  mounted() {
    if (this.$route.params?.encoded){
      this.getGrannyFromRoute()
    } else {
      this.getGranny()
    }
  },
  methods: {
    getGrannyFromRoute(){
      this.slogan = getSlogan()

      const encoded = this.$route.params?.encoded

      if (!encoded){
        this.getGranny()
      }

      const [gma, gpa] = decodeString(encoded)

      this.gma = gma
      this.gpa = gpa
    },
    getGranny() {
      this.slogan = getSlogan()

      const [gma, gpa, encoded] = getRandomNames()

      this.gma = gma
      this.gpa = gpa

      this.goToRoute(encoded)
    },
    goToRoute(encoded){
      this.$router.push(`/${encoded}`)
      console.log(encoded)
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
