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
import { getHeader, getGmaName, getGpaName } from '@/data'
export default {
  data() {
    return {
      header: '',
      gma: '',
      gpa: '',
    }
  },
  mounted() {
    this.getGranny()
  },
  methods: {
    getGranny() {
      this.header = getHeader()

      this.gma = getGmaName()
      this.gpa = getGpaName()
    },
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
