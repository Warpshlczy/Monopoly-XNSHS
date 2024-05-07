import { _decorator, Component, Node } from "cc";
import { _Component } from "../../Global/newComponent";
const { ccclass, property } = _decorator;

@ccclass("playerPiece")
export class playerPiece extends _Component {
  public player: Node;
  public totalSteps: number;
  public currentPosition: number;
  setAll(player: Node, totalSteps: number, currentPosition: number) {
    this.player = player;
    this.totalSteps = totalSteps;
    this.currentPosition = currentPosition;
  }
}