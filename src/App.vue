<template>
  <div id="app">
    <BackGround/>
    <div id="content" class="content">
      <Title/>
      <div id="blank"></div>
      <footer>
        <p>&copy;Kyoko Kitagawa</p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BackGround from './components/BackGround.vue';
import Title from './components/Title.vue'

@Options({
  components: {
    BackGround,
    Title,
  },
})
export default class App extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cantata+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#content {
  position: absolute;
  width: 100%;
}
#blank {
  height: 800px;
}
footer {
  text-align: center;
  width: 100%;
  font-size: 1rem;
  padding: 4rem;
}
.title {
  font-family: 'Cantata One', serif;
}
.is-vh-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  letter-spacing: .1rem;
  line-height: 1.6rem;
  margin-top: 1rem;
  font-size: 0.8rem;
}
.title-wrapper {
  position: relative;
  padding-bottom: 2rem;
}
</style>
