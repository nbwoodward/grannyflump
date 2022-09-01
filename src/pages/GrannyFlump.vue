<template>
  <div id="granny-flump">
    <h2 id="header">Only the best grandparent names ever.</h2>
    <div id="display">
      <div id="slogan">{{ slogan }}</div>
      <div id="names">
        <div id="gma">{{ gma }}</div>
        <div id="and">and</div>
        <div id="gpa">{{ gpa }}</div>
      </div>
      <button class="button" @click="getGranny()">New Names Please</button>
    </div>
    <div id="share">
      <a @click="share">Share -&gt;</a>
      <div id="copied" v-if="showCopied">Link copied to clipboard!</div>
    </div>
  </div>
</template>

<script>
import { getSlogan, getRandomNames, decodeString} from '@/data'
export default {
  data() {
    return {
      slogan: '',
      url: '',
      showCopied: false,
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
      console.log(this.$route.params?.encoded)
      return this.$route.params?.encoded
    },
    names() {
      if (!this.encoded) {
        return ["", ""]
      }

      return decodeString(this.encoded)
    },
    gma() {
      console.log(this.names)
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
    },
    async share() {
      await navigator.clipboard.writeText(window.location.href);

      this.showCopied = true;
      setTimeout( () => {
        this.showCopied = false;
      }, 750)
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
#display {
  padding: 40px;
  border: 1px solid #eee;
  margin: auto;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 400px;
  border-radius: 20px;
  margin-top: 15px;
  background-color: #ffd491;
}
.button{
  margin:auto;
  max-width:300px;
  margin-bottom:0;
  margin-top:auto;
}
#share a {
  cursor: pointer;
  display:block;
  padding:5px 10px;
}
#gma,
#gpa {
  font-size: 24pt;
}
button {
  margin-top: 30px;
}
</style>
