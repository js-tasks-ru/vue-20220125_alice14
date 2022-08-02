import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    language: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      options: {
        month: 'long',
        year: 'numeric',
        day: '2-digit',
      },
    };
  },
  computed: {
    localDate() {
      let lang = this.language ? `${this.language.toLowerCase()}-${this.language.toUpperCase()}` : 'en-US';
      return new Date(this.date).toLocaleDateString(lang, this.options);
    },
    timeAttr() {
      return new Date(this.date).toISOString().substring(0, 10);
    },
  },
  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="timeAttr">{{ localDate }}</time>
      </li>
    </ul>`,
});
