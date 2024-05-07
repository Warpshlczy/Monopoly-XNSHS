import { _decorator } from "cc";
const { ccclass, property } = _decorator;

@ccclass("eventCenter")
export class eventCenter {
  public eventsList: Map<string, Function> = new Map([
    ["", () => {}],
    ["", () => {}],
  ]);
  public send() {}
  public on() {}
}
