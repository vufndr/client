<template>
  <div>
    <ui-grid>
      <ui-grid-cell columns="2">
        <ui-card>
          <ui-card-content>
            <ui-card-media square class="demo-card__media">
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
export default {
  name: 'Search',
  mounted() {
    this.search();
  },
  methods: {
    search() {
      axios.get('/api/search')
        .then((response) => {
          console.log(response);
        });
    },
  }
}
</script>

<style>
.demo-card__media {
  background-image: url('https://picsum.photos/200');
}

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