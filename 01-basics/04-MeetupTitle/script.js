import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const vm = createApp({
  data() {
    return {
      meetup: 0,
      meetupTile: '',
    };
  },
  watch: {
    meetup(newValue, oldValue) {
      if (newValue !== oldValue) {
        return fetchMeetupById(newValue)
          .then((res) => {
            this.meetupTile = res.title;
          })
          .catch((error) => {
            throw error;
          });
      }
    },
  },
}).mount('#app');
