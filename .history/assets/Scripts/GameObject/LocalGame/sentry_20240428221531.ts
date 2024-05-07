import { _decorator, Component, Node } from "cc";

import { eventBus } from "../../Global/eventCenter";
import { map_1 } from "../../GameConfig/Maps/map_1";
import { _Component } from "../../Global/newComponent";
const { ccclass, property } = _decorator;

@ccclass("sentry")
export class Sentry extends _Component {
  //游戏进行的轮数
  round: number;
  start() {
    this.init();
  }

  update(deltaTime: number) {}
  init() {
    this.initMap();
    this.initPlayer();
  }
  //地图是随机的，从几种地图中随机选择一个
  initMap() {
    eventBus.emit("initMap", [map_1]);
  }
  initPlayer() {
    eventBus.emit("initPlayer");
  }
  //玩家初始棋子的位置是随第一个格子的位置不断变化的
  initPlayerPieces() {}
}
