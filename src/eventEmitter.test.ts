import { EventEmitter } from "./eventEmitter";

/**
 * Event Emitter Coding Challenge
 * -------------------------------------
 * You're going to build a simple basic event emitter. What is an event emitter? Put it simply,
 * it allows calling clients to register handlers for specific events (eg a mouse click) such that
 * when an event is emitted, each callback is invoked with the payload.
 *
 * INSTRUCTIONS:
 *   1. Complete eventEmitter.ts - use the tests below to guide you as to what to implement. Naturally,
 *      the tests should probably pass!
 *   2. Add any additional tests that you think might be relevant to ensure the implementation is
 *      robust.
 *   3. Make ANY improvements you think are reasonable (rename, refactor, even restructure)
 *   4. Remember to git commit any progress (as you might with any task or work item assigned to you)
 *   6. If you have any questions - feel free to make any reasonable assumptions (and document them
 *      and why).
 *
 * Good luck!
 */
describe("EventEmitter", () => {
  it("can be constructed", () => {
    const eventEmitter = new EventEmitter();
    expect(eventEmitter).toBeInstanceOf(EventEmitter);
  });

  it("can register a callback for a given event", () => {
    const eventEmitter = new EventEmitter();
    const callback = jest.fn();
    const payload = {};
    eventEmitter.register("mouseClick", callback);
    eventEmitter.emit("mouseClick", payload);
    expect(callback.mock.calls.length).toBe(1);
    const callbackParam1 = callback.mock.calls[0][0];
    expect(callbackParam1).toBe(payload);
  });

  it("can register different callbacks for a different events", () => {
    const eventEmitter = new EventEmitter();
    const mouseClickCallback = jest.fn();
    const keyPressCallback = jest.fn();
    const payload = {};
    eventEmitter.register("mouseClick", mouseClickCallback);
    eventEmitter.register("keyPressCallback", keyPressCallback);
    eventEmitter.emit("mouseClick", payload);
    expect(mouseClickCallback.mock.calls.length).toBe(1);
    const mouseClickCallbackParam1 = mouseClickCallback.mock.calls[0][0];
    expect(mouseClickCallbackParam1).toBe(payload);
    expect(keyPressCallback.mock.calls.length).toBe(0);
  });

  it("can register multiple callbacks for a given event", () => {
    const eventEmitter = new EventEmitter();
    const callbacks = [jest.fn(), jest.fn(), jest.fn()];
    const payload = {};
    callbacks.forEach((cb) => {
      eventEmitter.register("mouseClick", cb);
    });
    eventEmitter.emit("mouseClick", payload);
    callbacks.forEach((cb) => {
      expect(cb.mock.calls.length).toBe(1);
      const cbParam1 = cb.mock.calls[0][0];
      expect(cbParam1).toBe(payload);
    });
  });
});
