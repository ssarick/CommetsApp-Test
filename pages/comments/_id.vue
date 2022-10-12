<template>
  <div class="main">
    <div v-if="!loading" class="card">
      <div class="card__head heading">
        Comment full description
      </div>
      <div v-if="getSingleComment" class="card__body">
        <p><span>postId:</span> {{ getSingleComment.postId }}</p>
        <p><span>id:</span>{{ getSingleComment.id }}</p>
        <p><span>name:</span>{{ getSingleComment.name }}</p>
        <p><span>email:</span>{{ getSingleComment.email }}</p>
        <p><span>body:</span>{{ getSingleComment.body }}</p>
      </div>
    </div>
    <div v-else>
      <Loader/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Loader from "~/components/loader";

export default {
  name: "Id",
  data() {
    return{
     loading: false
    }
  },
  components: {
    Loader
  },
  computed: {
    ...mapGetters(['getSingleComment'])
  },
  methods: {
    ...mapActions(['GET_COMMENTS_BY_ID']),
  },
  async mounted() {
    this.loading = true
    await this.GET_COMMENTS_BY_ID(this.$router.currentRoute.params.id)
      .then( res => {
        if (!res.length){
          this.$router.push('/comments')
        }
      })
    this.loading = false
  },
}
</script>
