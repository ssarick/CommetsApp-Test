export const state = () => ({
  comments: [],
  comment: []
});

export const actions = {
  async GET_COMMENTS({commit},) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/comments').then(response => {
        commit("SET_COMMENTS_TO_STORE", response);
        resolve(response)
      }).catch(err => reject(err));
    });
  },

  async GET_COMMENTS_BY_ID({commit}, id) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/comments', {
        params: {id: id}
      }).then(response => {
        commit("SET_COMMENT", response);
        resolve(response)
      }).catch(err => reject(err));
    })
  }
};

export const mutations = {
  SET_COMMENTS_TO_STORE: (state, comments) => {
    state.comments = comments;
  },
  SET_COMMENT: (state, comment) => {
    state.comment = comment;
  },
  sortedById(state) {
    state.comments.sort((a, b) => a.id - b.id)
  },
  sortedByName(state) {
    state.comments.sort((a, b) => a.name.localeCompare(b.name))
  }
};

export const getters = {
  getComments(state) {
    return state.comments;
  },
  getSingleComment(state) {
    return state.comment[0] || {};
  }
};
