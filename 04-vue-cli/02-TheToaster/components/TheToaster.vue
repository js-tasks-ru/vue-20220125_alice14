<template>
  <div class="toasts">
    <ui-toast v-for="toast in toasters" :key="toast.id" :toastData="toast" @click="removeToaster(toast.id, true)" />
  </div>
</template>

<script>
import UiIcon from './UiIcon';
import UiToast from './UiToast';

export default {
  name: 'TheToaster',
  components: {
    UiIcon,
    UiToast,
  },
  data() {
    return {
      icons: {
        success: 'check-circle',
        error: 'alert-circle',
      },
      text: {
        error: 'Error',
        success: 'Success',
      },
      toasters: [],
    };
  },
  methods: {
    // i would personally remove error and success methods and would just call formToasterData, but tests fail
    success(message) {
      this.formToasterData('success', message);
    },
    error(message, time) {
      this.formToasterData('error', message);
    },
    formToasterData(type, message) {
      let toastData = {
        type,
        icon: this.icons[type],
        close: true,
        message: message,
        id: Math.floor(Math.random() * 100),
        interval: 5000,
        class: `toast_${type}`,
      };
      this.toasters.push(toastData);
      this.removeToaster(toastData.id, toastData.close, toastData.interval);
    },
    removeToaster(id, close, interval) {
      if (close && !interval) {
        this.toasters = this.toasters.filter((toast) => toast.id !== id);
      } else if (close && interval) {
        setTimeout(() => {
          this.toasters = this.toasters.filter((toast) => toast.id !== id);
        }, interval);
      }
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
