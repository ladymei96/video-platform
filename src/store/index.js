import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 50部影片
    videoItems: [],
    videoItem: {},
  },
  mutations: {
    VIDEOITEMS(state, items) {
      state.videoItems = items;
    },
    VIDEOITEM(state, item) {
      state.videoItem = item;
    },
  },
  actions: {
    // 把資料挖回來-1.取得頻道上傳id 2.取得頻道影片清單 3.取得50部影片
    getPlayListItems(context) {
      const channelPlaylistUrl = `${process.env.VUE_APP_URL}channels?part=contentDetails&id=UCj_z-Zeqk8LfwVxx0MUdL-Q&key=${process.env.VUE_APP_API}`;
      axios.get(channelPlaylistUrl).then((res) => {
/* eslint-disable */
        const uploads = res.data.items[0].contentDetails.relatedPlaylists.uploads;
        const playlistUrl = `${process.env.VUE_APP_URL}playlistItems?part=snippet,contentDetails&playlistId=${uploads}&key=${process.env.VUE_APP_API}&maxResults=50`;
        return axios.get(playlistUrl);
      }).then((result) => {
        context.commit('VIDEOITEMS', result.data.items);
      });
    },
    getVideo(context, videoId) {
      const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.VUE_APP_API}&part=snippet,contentDetails`;
      axios.get(url).then((res) => {
        context.commit('VIDEOITEM', res.data.items[0]);
      }).catch((err) => console.log(err));
    },
  },
  modules: {
  },
});
