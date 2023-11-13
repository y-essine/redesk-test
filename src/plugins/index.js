import VueFeather from 'vue-feather';

import notifications from '@kyvg/vue3-notification';
import { createMetaManager } from 'vue-meta';

export default {
  install: (app) => {
    app.use(notifications);
    app.use(createMetaManager());
    app.component(VueFeather.name, VueFeather);
  }
}