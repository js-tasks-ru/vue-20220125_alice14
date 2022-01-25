import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      result: 0,
      firstValue: 0,
      secondValue: 0,
      calcType: 'sum',
    };
  },
  methods: {
    calculate() {
      switch (this.calcType) {
        case 'sum':
          this.result = this.firstValue + this.secondValue;
          break;
        case 'subtract':
          this.result = this.firstValue - this.secondValue;
          break;
        case 'multiply':
          this.result = this.firstValue * this.secondValue;
          break;
        case 'divide':
          this.result = this.firstValue / this.secondValue;
          break;
        default:
          break;
      }
    },
  },
}).mount('#app');
