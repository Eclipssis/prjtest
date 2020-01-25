export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.afterEach((to, from) => {
    // console.log('app', app)
  })
}