<template>
  <div class="app">
    <b-form-group label="Your Name:" >
      <b-form-input
        v-model="user_name"
        required
        placeholder="Enter name"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Your Familia:">
      <b-form-input
        v-model="user_surname"
        required
        placeholder="Enter Familia"
      ></b-form-input>
    </b-form-group>
    <b-btn variant="primary" @click="on_save_user" :disabled="loading">
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
    name: 'PageUser',

    mixins: [check_changes_before_leave],

    data(){
      return{
        loading: false
      }
    },

    computed: {
      ...mapGetters({
        has_pending_changes: 'user/has_pending_changes'
      }),

      user_name: {
        get () {
          return this.$store.getters['user/name']
        },

        set (value) {
          this.set_user_name(value)
        }
      },

      user_surname: {
        get () {
          return this.$store.getters['user/surname']
        },

        set (value) {
          this.set_user_surname(value)
        }
      }
    },

    methods: {
      ...mapMutations({
        set_user_name: 'user/set_name',
        set_user_surname: 'user/set_surname'
      }),

      ...mapActions({
        save_user: 'user/save_user'
      }),

      async on_save_user () {
        console.log('on_save_profile')
        try {
          this.loading = true
          await this.save_user({
            user_name: this.user_name,
            user_surname: this.user_surname
          })
        } catch (error) {
          // handle error
        } finally {
          this.loading = false
        }
      }
    },
  }
</script>
