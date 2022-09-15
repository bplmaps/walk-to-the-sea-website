export default function (to, from, savedPosition) {
  if (to.name === 'index' && !to.hash) {
    return {
      x: 0,
      y: 0,
    }
  }
}
