export const state = () => ({
  primaryColor: ""
});
export const mutations = {
  setPrimaryColor(state, color) {
    state.primaryColor = color;
  }
};
export const actions = {
  changePrimaryColor({ commit }, color) {
    commit("setPrimaryColor", color);
    document.body.style.setProperty("--color-primary", color);
  },
  resetPrimaryColor({ commit }) {
    const color = '#FF5A36'
    commit("setPrimaryColor", color);
    document.body.style.setProperty("--color-primary", color);
  },
};
