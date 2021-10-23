<template>
  <div>
    <ui-grid>
      <ui-grid-cell columns="2" v-for="image in images" :key="image">
        <ui-card>
          <ui-card-content>
            <ui-card-media square class="demo-card__media" v-bind:style="{ 'background-image': 'url(' + image.thumbnail_url + ')' }">
              <ui-card-media-content class="demo-card__media-content--with-title">
              </ui-card-media-content>
            </ui-card-media>
          </ui-card-content>
        </ui-card>
      </ui-grid-cell>
    </ui-grid>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',
  data() {
    return {
      facets: [],
      images: [],
    }
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      axios.get('/api/search', { params: { resolution: '3000x2006' } })
        .then((response) => {
          this.facets = response.data.facets;
          this.images = response.data.data;
        });
    },
  }
}
</script>

<style>
.demo-card__media-content--with-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.demo-card__media-title {
  padding: 8px 16px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  color: white;
}
</style>