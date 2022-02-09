import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',
  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },
  props: {
    meetupId: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  data() {
    return {
      isLoading: false,
      meetup: undefined,
      error: null,
    };
  },
  computed: {
    showMeetup() {
      return !this.isLoading && !this.error;
    },
    showLoading() {
      return this.isLoading && !this.error;
    },
  },
  watch: {
    meetupId(newValue, oldValue) {
      this.error = null;
      if (newValue !== oldValue) {
        return this.getMeetupById(newValue);
      }
      return Promise.resolve();
    },
  },
  beforeMount() {
    if (!this.meetup) {
      return this.getMeetupById(this.meetupId);
    }
  },
  methods: {
    getMeetupById(id) {
      this.isLoading = true;
      return fetchMeetupById(id)
        .then((meetupData) => {
          if (meetupData) {
            this.meetup = meetupData;
          }
        })
        .catch((error) => {
          this.error = error.message;
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  template: `
    <div class="page-meetup">
      <meetup-view :meetup="meetup" v-if = "showMeetup"></meetup-view>
      <ui-container v-if = "showLoading">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if = "error">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>
    </div>`,
});
