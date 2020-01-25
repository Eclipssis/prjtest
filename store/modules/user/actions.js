import { axios_fake } from '@/api/index'

export default {
  async save_user (context, user) {
    const url = '/user/save'
    return await axios_fake('post', url, {user})
  }
}
