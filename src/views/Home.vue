<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 item mb-3"
        v-for="video in videoItems" :key="video.id">
          <div class="card h-100 border-0">
            <img :src="video.snippet.thumbnails.high.url" class="card-img-top" alt="videoImage"
            @click="playVideo(video.contentDetails.videoId)">
            <div class="card-body">
              <h5 class="card-title">{{ video.snippet.title.substr(0, 25) }} ...</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {

  },
  computed: {
    videoItems() {
      return this.$store.state.videoItems;
    },
  },
  methods: {
    playVideo(id) {
      this.$router.push(`/play-video/${id}`);
    },
  },
};
</script>
