export default {
  name: state => state.name,
  surname: state => state.surname,
  has_pending_changes: state => {
    return state.name !== state.origin_user.name || state.surname !== state.origin_user.surname
  }
}
