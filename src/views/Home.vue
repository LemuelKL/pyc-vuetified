<template>
  <v-row no-gutters align="center" justify="center">
    <v-card class="pa-5" width="1140" rounded="t-0 b-xl">
      <v-img max-width="1140" src="./../../public/resources/schoolname.gif"></v-img>
      <div class="my-5"></div>
      <v-row no-gutters>
        <v-col cols="3" class="pr-4">
          <v-row no-gutters class="mb-3">
            <v-btn depressed color="success" width="100%">School Pamphlet</v-btn>
          </v-row>
          <v-row no-gutters class="mb-3">
            <v-btn depressed color="success" width="100%">School Facilities</v-btn>
          </v-row>
          <v-row no-gutters class="mb-3">
            <v-btn depressed color="success" width="100%">Admission</v-btn>
          </v-row>
          <v-row no-gutters class="mb-3">
            <v-btn depressed color="success" width="100%">Contact Us</v-btn>
          </v-row>

          <v-row no-gutters class="mb-3">
            <v-hover v-slot:default="{ hover }">
              <v-card width="100%">
                <v-img src="./../../public/resources/youtube_thumbnails/campus_tour.jpg">
                  <v-expand-x-transition>
                    <v-btn v-if="hover" icon x-large dark @click="showYtPlayer = true; ytLink = 'https://www.youtube.com/embed/dGBsOLnjDxM?autoplay=1'">
                      <v-icon>mdi-youtube</v-icon>
                    </v-btn>
                  </v-expand-x-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-row>

          <v-row no-gutters>
            <v-hover v-slot:default="{ hover }">
              <v-card width="100%">
                <v-img src="./../../public/resources/youtube_thumbnails/40.jpg">
                  <v-expand-x-transition>
                    <v-btn v-if="hover" icon x-large dark @click="showYtPlayer = true; ytLink = 'https://www.youtube.com/embed/ZL0DU4_pcpQ?autoplay=1'">
                      <v-icon>mdi-youtube</v-icon>
                    </v-btn>
                  </v-expand-x-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-row>

        </v-col>
        <v-col cols="6">
          <v-card flat>
            <v-carousel
              cycle
              hide-delimiter-background
              hide-delimiters
              show-arrows-on-hover
              height="250"
              interval="3000"
            >
              <v-carousel-item v-for="i in 22" :key="i" :src="carouselBaseUrl + n(i) + '.jpg'"></v-carousel-item>
            </v-carousel>
          </v-card>

          <v-card class="mt-2" color="#e0d9c8">
            <v-card-title>
              School Notice
              <v-spacer></v-spacer>
              <v-icon>mdi-bulletin-board</v-icon>
            </v-card-title>
            <v-card-text v-if="!!noticeItems">
              <v-list color="#e0d9c8" dense>
                <v-list-item
                  v-for="(item, index) in noticeItems"
                  :key="item.title"
                  link
                  :to="item.link"
                >
                  <v-list-item-icon>
                    <v-icon>mdi-numeric-{{index + 1}}-box-outline</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 12 : 2" class="ml-4">
              <router-link to="/PYCnet">
                <v-img src="./../../public/resources/pycnet_logo.png"></v-img>
              </router-link>
            </v-card>
          </v-hover>

          <v-sheet
            class="ml-4 mb-5"
            style="position: absolute; bottom: 0;"
            height="255"
            width="255"
          >
            <v-calendar color="primary" :value="today">
              <template v-slot:day-label="{ present, day }">
                <v-btn v-if="present" x-small depressed fab color="#0e9482" dark>{{day}}</v-btn>
                <v-btn v-else x-small depressed fab color="transparent">{{day}}</v-btn>
              </template>
            </v-calendar>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
    <v-dialog v-model="showYtPlayer" width="unset">
      <v-card>
        <iframe
          width="560"
          height="315"
          :src="ytLink"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      carouselBaseUrl: "https://www2.pyc.edu.hk/img/activity/1819/",
      noticeItems: [
        { title: "取校服通知", link: "/fet43" },
        {
          title:
            "2020-2021年度中一新生須知(有關7月14日「中一入學前香港學科測驗」的安排)",
          link: "/5b9nm",
        },
        { title: "2020-2021 Textbooks List", link: "/q145g" },
        { title: "「沙田培英App」家長安裝及使用", link: "/hj5e8" },
      ],
      today: '2020-08-10',
      showYtPlayer: false,
      ytLink: ''
    };
  },
  methods: {
    n(n) {
      return n > 9 ? "" + n : "0" + n;
    },
    stopVideos() {
      document.querySelectorAll('iframe').forEach(v => { v.src = v.src.replace('?autoplay=1', '') });
      document.querySelectorAll("video").forEach((v) => {
        v.pause();
      });
    },
  },
  watch: {
    showYtPlayer(val) {
      if (!val) {
        this.stopVideos()
      }
    }
  }
};
</script>
<style>
.v-calendar-weekly__day .v-present {
  text-align: center;
}
</style>