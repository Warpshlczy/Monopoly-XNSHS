import { _decorator, Component, Node, log } from "cc";

import { eventBus } from "../../Global/eventCenter";
import { map_1 } from "../../GameConfig/Maps/map_1";
import { _Component } from "../../Global/newComponent";
import { Player } from "./player";
import { PlayerPiece } from "./playerPiece";
const { ccclass, property } = _decorator;

@ccclass("sentry")
export class Sentry extends _Component {
  //游戏进行的总轮数
  round: number;
  //当前操作的玩家的id
  currentPlayerID: number;
  //游戏开始时第一位行动的玩家，影响轮数的参考初始值
  initialPlayerID: number;
  //本地玩家的id
  localPlayerId: number;
  //是否是本地玩家的回合
  isLocalPlayer: boolean;
  //当前玩家有多少骰子
  diceAmount: number;
  //本次投掷骰子总结果
  diceResult: number;
  //当前玩家可以投掷骰子的次数
  rollTimes: number;
  start() {
    this.init();
  }
  update(deltaTime: number) {}
  async init() {
    await this.initMap();
    await this.initPlayers();
    this.initBase();
    this.startGame(this.initialPlayerID);
  }
  //地图是随机的，从几种地图中随机选择一个
  initMap() {
    return eventBus.emit("initMap", [map_1]);
  }
  //初始化玩家和对应的棋子
  initPlayers() {
    return eventBus.emit("initPlayers");
  }
  //初始化基础数据，包括当前轮数、起始玩家
  initBase() {
    this.round = 0;
    this.initialPlayerID = 1;
    this.localPlayerId = 1;
    this.updateRound();
  }
  //开始游戏
  startGame(initialPlayerID: number) {
    this.round++;
    this.updateRound();
    this.switchPlayer(initialPlayerID);
  }
  //更新回合数
  updateRound() {
    eventBus.emit("updateRound", [this.round]);
  }
  //切换玩家回合
  switchPlayer(targetPlayerID: number) {
    this.diceAmount = 1;
    this.rollTimes = 1;
    eventBus.emit("switchPlayer", [targetPlayerID]);
    this.currentPlayerID = targetPlayerID;
    this.isLocalPlayer =
      this.currentPlayerID === this.localPlayerId ? true : false;
    if (this.isLocalPlayer) {
    }
  }
  //允许玩家操作回合时界面的所有按钮
  enableOperation() {}
  //投掷骰子
  rollDice() {}
  //移动棋子
  movePiece() {}
  //执行棋子落点后事件
  executeLandEvent() {}
}
