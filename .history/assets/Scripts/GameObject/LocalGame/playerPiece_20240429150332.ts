import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("playerPiece")
export class playerPiece extends Component {
  public totalSteps: 0;
}