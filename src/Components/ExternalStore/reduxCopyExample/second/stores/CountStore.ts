import { singleton } from 'tsyringe';

import ActionStore from './ActionStore';

@singleton()
export default class CountStore extends ActionStore {
  count = 0;

  increase(step = 1) {
    this.count += step;
    this.publish();
  }

  decrease(step = 1) {
    this.count -= step;
    this.publish();
  }
}
