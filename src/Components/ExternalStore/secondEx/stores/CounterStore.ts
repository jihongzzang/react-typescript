import { singleton } from 'tsyringe';

type Listener = () => void;
type ForceUpdate = () => void;

@singleton()
export default class CounterStore {
  count = 0;

  listeners = new Set<ForceUpdate>();

  publish() {
    this.listeners.forEach((listener) => {
      listener();
    });
  }

  // 안에서 increase decrease 까지 캡슐화를 하자
  increase() {
    this.count += 1;
    this.publish();
  }

  decrease() {
    this.count -= 1;
    this.publish();
  }

  addListener(listener: Listener) {
    this.listeners.add(listener);
  }

  removeListener(listener: Listener) {
    this.listeners.delete(listener);
  }
}
