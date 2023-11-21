type Listener = () => void;

export default class ActionStore {
  private listners = new Set<Listener>();

  addListener(listener: Listener) {
    this.listners.add(listener);
  }

  removeListener(listener: Listener) {
    this.listners.delete(listener);
  }

  protected publish() {
    this.listners.forEach((listner) => listner());
  }
}
