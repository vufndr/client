<template>
  <div class="flex">
    <div class="flex-none p-4 w-1/3">
      <ui-list v-model="selectedIndex" single-selection>
        <ui-item v-for="(item, index) in items" :key="index">
          <ui-item-first-content>
            <ui-icon v-if="item.icon.startsWith('mdi')">
              <Icon :icon="item.icon" />
            </ui-icon>
            <ui-icon v-else>
              {{ item.icon }}
            </ui-icon>
          </ui-item-first-content>
          <ui-item-text-content>{{ item.text }}</ui-item-text-content>
        </ui-item>
      </ui-list>
    </div>
    <div class="flex-1 p-4" v-if="selectedItem">
      <div v-if="selectedItem.text === 'Email'">
        <div class="w-full">
          <ui-textfield fullwidth v-model="email">
            Email
          </ui-textfield>
        </div>
        <div class="pt-4 w-1/4">
          <ui-button raised icon="update">Update</ui-button>
        </div>
      </div>
      <div v-if="selectedItem.text === 'Dropbox'">
        <ui-alert state="info">No Dropbox Sync Configured</ui-alert>

        <ui-button raised icon="sync" @click="redirectToDropbox()">Enable Sync</ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'Settings',
  components: {
    Icon,
  },
  data() {
    return {
      email: 'test@example.com',
      selectedIndex: 0,
      items: [
        {
          icon: 'email',
          text: 'Email',
        },
        {
          icon: 'mdi:dropbox',
          text: 'Dropbox',
        }
      ],
    };
  },
  computed: {
    selectedItem() {
      return this.items[this.selectedIndex];
    },
  },
  mounted() {
  },
  methods: {
    redirectToDropbox() {
      window.location.href = 'https://www.dropbox.com/oauth2/authorize?client_id=uaqnqcv23atv4qm&redirect_uri=https://vufndr.com/settings&response_type=code';
    }
  }
}
</script>

<style scoped>
.mdc-deprecated-list {
  padding: 0;
}
</style>
