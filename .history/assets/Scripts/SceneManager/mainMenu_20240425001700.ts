import { _decorator, Component, director, Node, log, Scene } from "cc";
import { getAllNodesInScene } from "../Util";
import { SceneManager } from "./sceneManager";
const { ccclass, property } = _decorator;

@ccclass("mainMenu")
export class MainMenu extends SceneManager {
  onLoad() {
    // this.node.on("startGame", () => {
    //   log("startGame");
    //   director.loadScene("game");
    // });
  }
  start() {
    this.init();
  }
  update(deltaTime: number) {}
}
