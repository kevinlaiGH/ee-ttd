export declare class EventEmitter {
    events: any;
    constructor();
    register(eventType: string, handler: Function): void;
    emit(eventType: string, payload: Object): void;
}
