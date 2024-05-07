import { _decorator, Component, Node } from "cc";
import { EventLand, Land } from "../../Items/lands";
const { ccclass, property } = _decorator;

@ccclass("landBlock")
export class LandBlock extends Component {
  public data: Land | EventLand;
  initData(){
    if( typeof this.data EventLand)
      {}
  }
}
