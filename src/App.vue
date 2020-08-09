<template>
  <v-app id="app">
    <v-app-bar app color="#0e9682" dark elevate-on-scroll>
      <v-toolbar-title>Shatin Pui Ying College</v-toolbar-title>
      <v-divider vertical inset class="ml-4"></v-divider>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu offset-y rounded="t-0 b-lg">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">School Profile</v-btn>
          </template>
          <v-list dark color="#0e9682" dense class="mt-1 pa-2">
            <template v-for="(item, index) in schoolProfileItems">
              <v-divider v-if="item.divider" :key="index"></v-divider>
              <v-list-item v-else :key="item.text" :to="item.link">
                <p class="font-weight-bold ma-0">{{ item.text }}</p>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>

        <v-divider inset vertical></v-divider>
        <v-menu offset-y rounded="t-0 b-lg">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">Academic</v-btn>
          </template>
          <v-list dark color="#0e9682" dense class="mt-1 pa-2">
            <template v-for="(item, index) in academicItems">
              <v-divider v-if="item.divider" :key="index"></v-divider>
              <v-list-item v-else :key="item.text" :to="item.link">
                <p class="font-weight-bold ma-0">{{ item.text }}</p>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>

        <v-divider inset vertical></v-divider>
        <v-menu offset-y rounded="t-0 b-lg">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">School Life</v-btn>
          </template>
          <v-list dark color="#0e9682" dense class="mt-1 pa-2">
            <template v-for="(item, index) in schoolLifeItems">
              <v-divider v-if="item.divider" :key="index"></v-divider>
              <v-list-item v-else :key="item.text" :to="item.link">
                <p class="font-weight-bold ma-0">{{ item.text }}</p>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>

        <v-divider inset vertical></v-divider>
        <v-menu offset-y rounded="t-0 b-lg">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">Pui Ying Family</v-btn>
          </template>
          <v-list dark color="#0e9682" dense class="mt-1 pa-2">
            <template v-for="(item, index) in puiYingFamilyItems">
              <v-divider v-if="item.divider" :key="index"></v-divider>
              <v-list-item v-else :key="item.text" :to="item.link">
                <p class="font-weight-bold ma-0">{{ item.text }}</p>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>

        <v-divider inset vertical></v-divider>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-divider vertical inset class="mx-4"></v-divider>
      <v-btn text>ENG | 繁</v-btn>
      <v-divider vertical inset class="mx-4 d-md-none"></v-divider>
      <v-app-bar-nav-icon class="d-md-none mr-2" @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary bottom>
      <v-list dark color="#0e9682" dense>
        <v-list-group>
          <v-list-item slot="activator" @click.stop>
            <v-list-item-title>A</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>a</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>b</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>c</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group>
          <v-list-item slot="activator" @click.stop>
            <v-list-item-title>B</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>a</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>b</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>c</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    group: [],
    drawer: false,
    schoolProfileItems: [
      { text: "School Information", link: "/SchoolInformation" },
      { text: "School History", link: "/SchoolHistory" },
      { text: "Vision and Mission", link: "/Vision&Mission" },
      { text: "Core Values", link: "/CoreValues" },
      {
        text: "School Motto and School Badge",
        link: "/SchoolMotto&SchoolBadge",
      },
      { text: "School Song", link: "/SchoolSong" },
      { text: "School Hymn", link: "/SchoolHymn" },
      {
        text: "Incoporated Management Committee",
        link: "/IncoporatedManagementCommittee",
      },
      { divider: true },
      { text: "Annual Plans and Reports", link: "/AnnualPlans&Reports" },
    ],
    academicItems: [
      { text: "Subjects Offered", link: "/SubjectsOffered" },
      { text: "Class Structure", link: "/ClassStructure" },
      { divider: true },
      { text: "Public Exam Results", link: "/PublicExamResults" },
      { text: "Library", link: "/Library" },
      {
        text: "Qaulity Assurance Inspections",
        link: "/QualityAssuranceInspections",
      },
    ],
    schoolLifeItems: [
      { text: "English Musical", link: "/EnglishMusical" },
      { divider: true },
      { text: "SPYC Newsletter", link: "/Newsletter" },
      { text: "Newspaper Clippings", link: "/NewspaperClippings" },
      { divider: true },
      { text: "Student's Artworks", link: "/StudentsArtworks" },
      { text: "Matrix", link: "/Matrix" },
      { divider: true },
      { text: "Student Achievements", link: "/StudentAchievements" },
      { divider: true },
      { text: "Photo Gallery", link: "/PhotoGallery" },
    ],
    puiYingFamilyItems: [
      {
        text: "SPYC Parent-Teacher Association",
        link: "/ParentTeacherAssociation",
      },
      { text: "SPYC Alumni Association", link: "/AlumniAssociation" },
      { text: "Global Pui Ying Network", link: "/GlobalPuiYingNetwork" },
    ],
  }),
};
</script>
<style>
#app {
  background-color: #e0d9c8;
}
.v-menu__content {
  box-shadow: none;
}
html {
  overflow-y: scroll;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
</style>