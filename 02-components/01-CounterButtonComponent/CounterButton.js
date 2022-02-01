import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: Number,
  },
  data() {
    return {
      counter: this.count,
    };
  },
  template: `<button class = "custom-button" 
  :value="count" 
  @click="$emit('update:count', ++counter)" type="button">{{ count }}</button>`,
});
