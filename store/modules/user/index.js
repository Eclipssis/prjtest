import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const defaultState = {
  name:  'Vasia',
  surname: 'Ivanov',
  parent: {
    name: 'Ivan',
    surname: 'Ivanov'
  }
}

const inBrowser = typeof window !== 'undefined';
// if in browser, use pre-fetched state injected by SSR
let state = ()=> {
  return (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : {
    ...Object.assign({}, defaultState),
    origin_user: {
      name: defaultState.name,
      surname: defaultState.surname
    }
  };
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}


