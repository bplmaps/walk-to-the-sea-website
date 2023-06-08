<template>
  <footer class="bg-midnight text-pewter">
    <div class="container mx-auto px-5 py-8 sm:py-14">
      <div class="flex flex-wrap justify-start items-end space-x-8 pb-6 mb-4 border-b border-pewter sm:pb-10 sm:mb-6 xl:pb-14 xl:space-x-16">
        <nuxt-link
          to="/"
        >
          <nuxt-img class="h-14 w-auto sm:h-20 xl:h-36" src="/brand-logo.png" sizes="sm:224px md:320px lg:576px xl:576px 2xl:576px" alt="Walk to the Sea logo" />
        </nuxt-link>
        <a href="https://www.leventhalmap.org/" target="_blank">
          <nuxt-img class="h-7 w-auto sm:h-10 xl:h-18" src="/bpl-logo.png" sizes="sm:224px md:320px lg:576px xl:576px 2xl:576px" alt="Normal V. Leventhal Map & Education Center logo" />
        </a>
      </div>

      <div class="flex justify-end items-center">
        <p class="font-sans text-xs italic mr-4 lg:text-base lg:mr-8">
          Designed by Ummo
        </p>
        <nav class="flex flex-wrap justify-end items-center space-x-2 xl:space-x-4">
          <a href="mailto:info@leventhalmap.org">
            <nuxt-img class="h-6 w-auto xl:h-12" src="/icon-mail.svg" alt="Email icon" />
          </a>
          <a href="https://www.instagram.com/walktotheseaboston/" target="_blank">
            <nuxt-img class="h-6 w-auto xl:h-12" src="/icon-instagram.svg" alt="Instagram icon" />
          </a>
          <a href="https://www.facebook.com/WalkToTheSeaBos/" target="_blank">
            <nuxt-img class="h-6 w-auto xl:h-12" src="/icon-facebook.svg" alt="Facebook icon" />
          </a>
          <a href="https://twitter.com/WalkToTheSeaBos" target="_blank">
            <nuxt-img class="h-6 w-auto xl:h-12" src="/icon-twitter.svg" alt="Twitter icon" />
          </a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>