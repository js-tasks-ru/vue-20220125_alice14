import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  methods: {
    increment() {
      this.$emit('update:count', this.count + 1); // почему нельзя count ++ но можно count +1 ?? в итоге зашла в ответа и ошибка была в этом
    },
  },
  template: `<button class = "custom-button" type="button" @click="increment">{{ count }}</button>`,
});
