import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("_Component")
export class _Component extends Component {
  public tag: string;
  set(property: string, value: any) {
    this[property] = value;
  }
  get(property: string) {
    return this[property];
  }
}
