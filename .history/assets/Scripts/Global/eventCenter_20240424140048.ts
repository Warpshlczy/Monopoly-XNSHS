import { _decorator } from "cc";
const { ccclass, property } = _decorator;

@ccclass("eventCenter")
export class eventCenter {
  public eventList: Map<string, Function> = new Map();

  public send() {}
  public on(eventName: string, callback: Function) {
    //如果没有该，则注册监听
    if (!this.eventList.has(eventName)) {
    }
  }
}
