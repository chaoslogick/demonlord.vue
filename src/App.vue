<template>
  <div id="app">
    <global-header />
    <section class="content" :class="componentName ? `${componentName}` : ``">
      <router-view />
      <global-footer />
    </section>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue';
import GlobalFooter from '@/components/GlobalFooter.vue';

export default {
  name: 'App',
  components: {
    'global-header': GlobalHeader,
    'global-footer': GlobalFooter,
  },
  computed: {
    siteUrl() {
      const url = document.URL;
      const urlParts = url.replace('http://', '').replace('https://', '').split(/[/?#]/);
      return urlParts[0];
    },
    componentName() {
      return this.$route.name;
    }
  },
  methods: {
    banner() {
      console.log(`
..axs$a.'$$$a. $$$$&a. .a$$$a.
   $$$ $$$ $$$ $$$ $$$ $$$ $$$
   $$$ $$$ $$$ $$$ $$$ $$$  '$
   $$$ $$$ $$$ $$$ $$$ $$$
   $$$ $$$ $$$ $$$s$$' $$$'$$$"'
   $$$ $$$ $$$ $$$     $$$ $$$
   $$$ $$$ $$$ $$$     $$$ $$$
   $$$ $$$ $$$ $$$     '$$a$$s..
     "' "$" ---------------------
         '' - website by mpg ----
            - demonlord.org -----
      `);
    },
    randomColor() {
      const colors = ['#66ffcc', '#ff6666', '#9566ff', '#66ffff', '#ffff66'];
      const colorValue = colors;
      const randomColorValue = colorValue[Math.floor(Math.random() * colorValue.length)];
      document.body.style.backgroundColor = randomColorValue;
    },
    pageTitle() {
      const currYear = new Date().getFullYear();
      document.title = `michael perry goodman // ${currYear}`;
    }
  },
  mounted() {
    this.banner();

    const hexChanger = () => {
      this.randomColor();
    };
    setInterval(hexChanger, 2000);

    this.pageTitle();
  },
};
</script>

<style lang="scss">
// SCSS entry point
@import "assets/scss/app.scss";
</style>
