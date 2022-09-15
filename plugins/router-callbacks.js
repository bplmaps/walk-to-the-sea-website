export default ({ app }) => {
  app.router.afterEach((to, from) => {
    if (from.name === 'locations-slug') {
      app.store.commit('locations/setLastLocation', from.params.slug)
    } else {
      app.store.commit('locations/setLastLocation', null)
    }
  })
}
