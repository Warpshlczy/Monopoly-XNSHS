import { _decorator } from "cc";
const { ccclass, property } = _decorator;

@ccclass("eventCenter")
export class eventCenter {
  private eventList: Map<string, Function> = new Map();

  public send() {}
  //如果没有该事件，则注册监听
  public on(eventName: string, callback: Function) {}

  public once() {}
}
