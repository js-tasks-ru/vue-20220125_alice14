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
  computed: {
    resultCalc() {
      return this.calculate();
    },
  },
  methods: {
    calculate() {
      switch (this.calcType) {
        case 'sum':
          return this.firstValue + this.secondValue;
        case 'subtract':
          return this.firstValue - this.secondValue;
        case 'multiply':
          return this.firstValue * this.secondValue;
        case 'divide':
          return this.firstValue / this.secondValue;
        default:
          return this.result;
      }
    },
  },
}).mount('#app');
