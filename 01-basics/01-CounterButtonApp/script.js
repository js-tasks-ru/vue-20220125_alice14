import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    setValue() {
      this.counter++;
    },
  },
  template: ` <button class="not-boring-button" role="button" @click="setValue()">{{counter}}</button>`,
}).mount('#app');
