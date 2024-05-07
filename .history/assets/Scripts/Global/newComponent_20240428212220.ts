import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("landBlock")
export class _Component extends Component {
  set(property: string, value: any) {
    this[property] = value;
  }
  get(property: string) {}
}
