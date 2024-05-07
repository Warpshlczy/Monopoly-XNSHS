import { _decorator, Component, Node } from "cc";
import { eventBus } from "../../Global/eventCenter";
const { ccclass, property } = _decorator;

@ccclass("sentry")
export class Sentry extends Component {
  start() {
    this.init();
  }

  update(deltaTime: number) {}
  init() {}
  //地图是随机的，从几种地图中随机选择一个
  initMap() {
    eventBus.()
  }
  //玩家区域的四块位置是随机的
  initPlayerZone() {}
  //玩家初始棋子的位置是随机的
  initPlayerPieces() {}
}
