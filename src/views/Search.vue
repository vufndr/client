<template>
  <div class="flex">
    <div class="flex-none">
      <ui-drawer v-for="(facet, name) in facets" :key="name">
        <ui-drawer-header>
          <ui-drawer-title>{{ upperFirst(name) }}</ui-drawer-title>
        </ui-drawer-header>
        <ui-drawer-content>
          <div class="mt-2 ml-2 mr-2">
            <ui-textfield fullwidth outlined with-leading-icon v-model="searches[name]" @input="search()">
              Search {{ upperFirst(name) }}
              <template #before>
                <ui-textfield-icon>search</ui-textfield-icon>
              </template>
            </ui-textfield>
          </div>
          <ui-list role="group" dense>
            <ui-item v-for="(count, type) in facet" :key="type">
              <template #before>
                <ui-checkbox
                  v-model="filters[name]"
                  :value="type"
                  @change="search()"
                ></ui-checkbox>
              </template>
              <ui-item-text-content>{{ type }}</ui-item-text-content>
              <ui-item-last-content>{{ count }}</ui-item-last-content>
            </ui-item>
          </ui-list>
        </ui-drawer-content>
      </ui-drawer>
    </div>
    <div class="flex-1 p-2">
      <ui-spinner active v-if="loading && !images.length"></ui-spinner>
      <ui-grid v-else>
        <ui-grid-cell columns="3" v-for="(image, index) in images" :key="image">
          <ui-card @click="open[index] = true">
            <ui-card-content>
              <ui-card-media square class="card__media" v-bind:style="{ 'background-image': 'url(' + image.thumbnail_url + ')' }">
                <ui-card-media-content class="card__media-content--with-title">
                </ui-card-media-content>
              </ui-card-media>
            </ui-card-content>
          </ui-card>
          <ui-dialog maskClosable v-model="open[index]">
            <ui-card>
              <ui-card-content>
                <ui-card-media square class="card__media" v-bind:style="{ 'background-image': 'url(' + image.preview_url + ')' }">
                  <ui-card-media-content class="card__media-content--with-title">
                  </ui-card-media-content>
                </ui-card-media>
              </ui-card-content>
            </ui-card>
          </ui-dialog>
        </ui-grid-cell>
      </ui-grid>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import axios from 'axios';
import qs from 'qs';

export default {
  name: 'Search',
  data() {
    return {
      dirty: true,
      loading: true,
      filters: [],
      searches: [],
      facets: [],
      images: [],
      open: [],
    }
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      this.loading = true;
      axios.get('/api/search', { params: {
        facets: this.filters,
        searches: _.omitBy(this.searches, (value) => _.isNil(value) || _.isEmpty(value) && !_.isNumber(value) || _.isNaN(value)),
      }, paramsSerializer: params => { return qs.stringify(params) } })
        .then((response) => {
          if (this.filters.length === 0) {
            this.filters = _.mapValues(response.data.facets, () => { return []; });
            this.searches = _.mapValues(response.data.facets, () => { return ''; });
          }
          this.facets = response.data.facets;
          if (!_.isEqual(_.map(this.images, 'id'), _.map(response.data.data, 'id'))) {
            this.images = response.data.data;
            this.open = _.mapValues(response.data.data, () => { return false; });
          }
          this.loading = false;
        });
    },
    upperFirst(s) {
      return _.upperFirst(s);
    },
  }
}
</script>

<style scoped>
.mdc-drawer__header {
  min-height: 0;
}

.mdc-dialog__container {
  width: 100%;
}

.card__media-content--with-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.card__media-title {
  padding: 8px 16px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  color: white;
}
</style>