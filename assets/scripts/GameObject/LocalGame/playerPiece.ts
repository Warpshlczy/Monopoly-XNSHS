import { _decorator, Component, Node } from "cc";
import { _Component } from "../../Global/newComponent";
const { ccclass, property } = _decorator;

@ccclass("playerPiece")
export class PlayerPiece extends _Component {
  @property({ type: Node })
  public player: Node;
  @property({ type: Number })
  public totalSteps: number;
  @property({ type: Number })
  public currentPosition: number;
  setAll(player: Node, totalSteps: number, currentPosition: number) {
    this.player = player;
    this.totalSteps = totalSteps;
    this.currentPosition = currentPosition;
  }
}
