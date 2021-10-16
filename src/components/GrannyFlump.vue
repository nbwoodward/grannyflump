<template>
  <div id="granny-flump">
    <div id="header">{{ header }}</div>
    <div id="names">
      <div id="gma">{{ gma }}</div>
      <div id="and">and</div>
      <div id="gpa">{{ gpa }}</div>
    </div>
    <button @click="getGranny()">Maybe a different name</button>
  </div>
</template>

<script>
import { getHeader, getRandomNames, decodeString} from '@/data'
export default {
  data() {
    return {
      header: '',
      gma: '',
      gpa: '',
      url: '2o8odo7o2o9o9oc',
    }
  },
  mounted() {
    // this.getGranny()
    this.getGrannyFromString()

  },
  methods: {
    getGrannyFromString(){
      const [gma, gpa] = decodeString(this.url)

      this.gma = gma
      this.gpa = gpa
    },
    getGranny() {
      this.header = getHeader()

      const [gma, gpa, encoded] = getRandomNames()

      this.gma = gma
      this.gpa = gpa

      this.goToRoute(encoded)
    },
    goToRoute(encoded){
      console.log(encoded)
    }
  },
}
</script>
<style scoped>
#header {
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
