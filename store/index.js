import axios from "axios";

export const state = () => ({
  comments: []
});

export const actions = {
  async GET_COMMENTS_FROM_API({commit}, id) {
    return new Promise(function (resolve, reject) {
      axios("https://jsonplaceholder.typicode.com/comments", {
        method: "GET",
        params: {
          id: id
        }
      }).then(response => {
        commit("SET_COMMENTS_TO_STORE", response.data);
        resolve(response.data)
      });
    }).catch(function (error) {
      console.log(error);
    });
  }
};

export const mutations = {
  SET_COMMENTS_TO_STORE: (state, comments) => {
    state.comments = comments;
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
  }
};
