import { _decorator } from "cc";
const { ccclass, property } = _decorator;

@ccclass("eventCenter")
export class eventCenter {
  private eventList: Map<string, Function | Function[]> = new Map();

  public send() {}

  public on(eventName: string, callback: Function) {
    //如果没有该事件，则注册监听
    if (!this.eventList.has(eventName)) {
    }
  }

  public once() {}
}
