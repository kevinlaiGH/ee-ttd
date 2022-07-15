export class EventEmitter {
  events: any = {}
  constructor() {
    this.events = {};
  }

  register(eventType: string, handler: Function):void {
    this.events[eventType] = handler
  }

  emit(eventType: string, payload: Object):void {
    this.events[eventType](payload);
  }
}


