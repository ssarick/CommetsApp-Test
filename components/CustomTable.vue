<template>
  <div>
    <div class="table">
      <div class="table-head">
        <p class="title heading">
          <span>ID</span>
          <i @click="sortedById">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="20" width="20">
              <path
                d="M8 14.5V13h4v1.5Zm-3-3.75v-1.5h10v1.5ZM3 7V5.5h14V7Z"/>
            </svg>
          </i>
        </p>
        <p class="title heading">
          <span>Name</span>
          <i @click="sortedByName">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="20" width="20">
              <path
                d="M8 14.5V13h4v1.5Zm-3-3.75v-1.5h10v1.5ZM3 7V5.5h14V7Z"/>
            </svg>
          </i>
        </p>
        <p class="title heading">Email</p>
      </div>
      <div class="table-row"
           v-for="post in paginatedContent"
           :key="'comment-index-'+post.id"
           @click="$router.push(`comments/${post.id}`)"
      >
        <p class="title">{{ post.id }}</p>
        <p class="title">{{ post.name }}</p>
        <p class="title">{{ post.email }}</p>
      </div>
    </div>
    <div class="table-pagination">
      <div class="pagination-btn"
           @click="prevPage()"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
          <path d="m10 16.229-6.208-6.208L10 3.812l1.167 1.209-4.209 4.187h9.25v1.625h-9.25l4.209 4.188Z"/>
        </svg>
      </div>
      <div class="pagination-btn"
           :class="{'selected': currentPage === pageNum }"
           v-for="pageNum in this.getPagesNumber"
           @click="selectPage(pageNum)"
      >
        {{ pageNum }}
      </div>
      <div class="pagination-btn"
           @click="nextPage()"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
          <path d="m10 16.229-1.167-1.208 4.209-4.188h-9.25V9.208h9.25L8.833 5.021 10 3.812l6.208 6.209Z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>

import {mapMutations} from "vuex";

export default {
  name: "CustomTable",
  data() {
    return {
      commentsPerPage: 10,
      currentPage: 1
    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    getPagesNumber() {
      return Math.ceil(this.data.length / this.commentsPerPage)
    },
    paginatedContent() {
      const from = (this.currentPage - 1) * this.commentsPerPage;
      const to = from + this.commentsPerPage;
      return this.data.slice(from, to)
    }
  },

  methods: {
    ...mapMutations(['sortedById', 'sortedByName']),
    selectPage(num) {
      this.currentPage = num
    },
    prevPage() {
      if (this.currentPage > 1) this.selectPage(--this.currentPage)
    },
    nextPage() {
      if (this.currentPage < this.getPagesNumber) this.selectPage(++this.currentPage)
    }
  }
}

</script>
