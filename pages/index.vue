<template>
  <div>
    <div>
      <h1>
        The Walk to the Sea covers four centuries of Boston history.
        Beginning at the State House on Beacon Hill, overlooking the
        old Boston Common, the Walk passes historic monuments and
        skyscrapers.
      </h1>
      <p>
        Start your journey by selecting a location below or using the map button:
      </p>
      <nav>
        <button>
          Explore Map
        </button>
        <button>
          Head to the Water
        </button>
      </nav>
    </div>

    <div>
      <p>
        The Walk crosses a terain that, centuries before, was not land at
        all, but an active port.  The history of Boston is linked to the Sea,
        whose smells and sounds once invaded the city.  The walk from the
        top to the sea, which stretches for a mile and descends a hundred
        feet, gives life to that story.
      </p>
    </div>

    <div v-if="allLocations.length">
      <h2>
        Start your journey by selecting one of the locations:
      </h2>
      <ul>
        <li v-for="(location, index) in allLocations" :key="index">
          <nuxt-link :to="location.slug">
            {{ location.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div>
      <!-- Video -->
    </div>

    <div>
      <h2>
        Accessibility and Route Planning
      </h2>
      <p>
        The complete Walk to the Sea route is <strong>1.4 mi (2.25km)</strong>
        in length.  From its highest point at the origin in Beacon Hill to the
        lowest point at Long Wharf, the <strong>elevation loss is 220ft (67 m)</strong>.
        <template v-if="allLocations.length">
          The route is ADA accessible at the following locations:
        </template>
      </p>
      <ul v-if="accessibleLocations.length">
        <li v-for="(location, index) in accessibleLocations" :key="index">
          {{ location.title }}
        </li>
      </ul>
    </div>

    <div>
      <p>
        Walk to the Sea is a project of the Norman B. Leventhal Map and Education
        Center, with generous support from the Mapping Boston Foundation.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $content, params }) {
    const allLocations = await $content().sortBy('order').fetch()
    const accessibleLocations = await $content().sortBy('order').where({ accessible: true }).fetch()

    return { allLocations, accessibleLocations }
  },
  head: {
    title: 'Walk to the Sea',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'The Walk to the Sea covers four centuries of Boston history. Beginning at the State House on Beacon Hill, overlooking the old Boston Common, the Walk passes historic monuments and skyscrapers.'
      }
    ]
  }
}
</script>
