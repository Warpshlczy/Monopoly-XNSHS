import { _decorator, Component, Node } from "cc";
import { _Component } from "../../Global/newComponent";
const { ccclass, property } = _decorator;

@ccclass("player")
export class player extends _Component {
  public tag: string = "player";
  public playerID: number;
  public playerName: string;
  public isRealPlayer: boolean;
  public isBot: boolean;
  public money: number;

  setAll(
    playerID: number,
    playerName: string,
    isRealPlayer: boolean,
    money: number
  ) {
    this.playerID = playerID;
    this.playerName = playerName;
    this.isRealPlayer = isRealPlayer;
    this.isBot = !isRealPlayer;
    this.money = money;
  }
}