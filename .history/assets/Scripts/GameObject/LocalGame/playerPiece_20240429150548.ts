import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("playerPiece")
export class playerPiece extends Component {
  public player: Node;
  public totalSteps: number;
  public currentPosition: number;
}
