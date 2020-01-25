
import { axios_fake } from '@/api/index'

export default {
  async save_country (context, country) {
    const url = '/profile/save'
    return await axios_fake('post', url, {country})
  }
}
