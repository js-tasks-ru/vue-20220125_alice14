import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    image: {
      type: String,
      required: false,
    },
  },
  computed: {
    imageStyles() {
      return this.image ? { '--bg-url': 'url(' + this.image + ')' } : {};
    },
  },
  template: `
    <div class="meetup-cover" v-bind:style="imageStyles">
        <h1 class="meetup-cover__title">{{title}}</h1>
    </div>`,
});
