<template>
  <div class="main">
    <div>
      <CustomTable
        :data='getComments'
      />
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";
import CustomTable from "~/components/CustomTable";

export default {
  name: "IndexPage",
  components: {
    CustomTable
  },
  computed: {
    ...mapGetters(['getComments']),
  },
  methods: {
    ...mapActions(['GET_COMMENTS_FROM_API']),
  },
  mounted() {
    this.GET_COMMENTS_FROM_API()
  },
};
</script>


