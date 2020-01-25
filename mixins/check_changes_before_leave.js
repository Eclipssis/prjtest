const check_changes_before_leave = {
  beforeRouteLeave (to, from, next) {
    let answer = true
    
    if (this.has_pending_changes) {
      answer = window.confirm('У вас есть несохранённые изменения! Вы хотите уйти?')
    }
    
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}

export default check_changes_before_leave