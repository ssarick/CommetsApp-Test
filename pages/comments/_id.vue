<template>
  <div>
    <div class="card">
      <div class="card__head heading">
        Comment full description
      </div>
      <div v-if="data" class="card__body">
        <p><span>postId:</span> {{ data.postId }}</p>
        <p><span>id:</span>{{ data.id }}</p>
        <p><span>name:</span>{{ data.name }}</p>
        <p><span>email:</span>{{ data.email }}</p>
        <p><span>body:</span>{{ data.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Id",
  data() {
    return {
      data: null
    }
  },
  methods: {
    ...mapActions(['GET_COMMENTS_FROM_API']),
  },
  mounted() {
    this.GET_COMMENTS_FROM_API(this.$router.currentRoute.params.id).then(res => {
      res.forEach(e => this.data = e)
    })
  },
}
</script>
