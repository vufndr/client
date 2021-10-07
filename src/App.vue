<template>
  <div class="demo-container">

    <!-- Drawer -->
    <ui-drawer type="modal" nav-id="demo-menu">
      <ui-drawer-header>
        <ui-drawer-title>VUFNDER</ui-drawer-title>
        <ui-drawer-subtitle>Image Search</ui-drawer-subtitle>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-nav>
          <router-link
            to="/dashboard"
            custom
            v-slot="{ href, navigate, isActive }"
          >
            <ui-nav-item :href="href" :active="isActive" @click="navigate">Dashboard</ui-nav-item>
          </router-link>
          <router-link
            to="/search"
            custom
            v-slot="{ href, navigate, isActive }"
          >
            <ui-nav-item :href="href" :active="isActive" @click="navigate">Search</ui-nav-item>
          </router-link>
        </ui-nav>
      </ui-drawer-content>
    </ui-drawer>

    <!-- Content -->
    <div class="demo-content">
      <!-- App bar -->
      <ui-top-app-bar
        fixed
        class="demo-app-bar"
        content-selector=".demo-app-content"
        nav-id="demo-menu"
      >
        VUFNDR
        <template #toolbar="{ toolbarItemClass }">
          <ui-menu-anchor absolute>
            <ui-icon-button :class="toolbarItemClass" icon="account_circle" @click="open = true"></ui-icon-button>
            <ui-menu
              v-model="open"
              :position="'BOTTOM_START'"
              :items="items"
              @selected="onSelected"
            >
            </ui-menu>
          </ui-menu-anchor>
        </template>
      </ui-top-app-bar>
      <!-- App content -->
      <div class="demo-app-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      open: false,
      authenticatedItems: [
        {
          value: 'logout',
          text: 'Logout',
        },
        '-',
        {
          value: 'help',
          text: 'Help & Feedback',
        },
        {
          value: 'settings',
          text: 'Settings',
        },
      ],
      unauthenticatedItems: [
        {
          value: 'login',
          text: 'Login',
        },
        {
          value: 'register',
          text: 'Register',
        },
      ],
    }
  },
  computed: {
    ...mapState(['authenticated']),
    items() {
      return this.authenticated ? this.authenticatedItems : this.unauthenticatedItems;
    },
  },
  methods: {
    onSelected(data) {
      this.$router.push({ name: data.value })
    },
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
</style>
