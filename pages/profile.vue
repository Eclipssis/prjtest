<template>
  <div class="app">
    <b-form-group  label="Your Country:" >
      <b-form-input
        v-model="country"
        required
        placeholder="Enter country"
      ></b-form-input>
    </b-form-group>
    <b-btn variant="primary" @click="on_save_profile" :disabled="loading">
      <!-- TODO: сделать обертку для кнопки, вынести loading в props -->
      <template v-if="!loading">Save</template>
      <template v-else>Loading...</template>
    </b-btn>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import check_changes_before_leave from '@/mixins/check_changes_before_leave'

  export default {
    name: 'PageProfile',

    mixins: [check_changes_before_leave],
    
    data(){
      return {
        loading: false
      }
    },
    computed: {
      ...mapGetters({
        has_pending_changes: 'profile/has_pending_changes'
      }),

      country: {
        get () {
          return this.$store.getters['profile/country']
        },

        set (value) {
          this.set_country(value)
        }
      }
    },

    methods: {
      ...mapMutations({
        set_country: 'profile/set_country'
      }),

      ...mapActions({
        save_country: 'profile/save_country'
      }),

      async on_save_profile () {
        console.log('on_save_profile')
        try {
          this.loading = true
          await this.save_country(this.country)
        } catch (error) {
          // handle error
        } finally {
          this.loading = false
        }
      }
    }
  }
</script>
