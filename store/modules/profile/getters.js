export default {
  country: state => state.country,
  has_pending_changes: state => {
    return state.country !== state.origin_country
  }
}