<template>
  <div class="main">
    <div v-if="!loading">
      <CustomTable
        :data='getComments'
      />
    </div>
    <div v-else>
      <Loader/>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";
import CustomTable from "~/components/CustomTable";
import Loader from "~/components/loader";


export default {
  name: "CommentsPage",
  data() {
    return{
      loading: false
    }
  },
  components: {
    CustomTable,
    Loader
  },
  computed: {
    ...mapGetters(['getComments']),
  },
  methods: {
    ...mapActions(['GET_COMMENTS']),
  },
  async created() {
    this.loading = true
    await this.GET_COMMENTS()
    this.loading = false
  },
};
</script>


