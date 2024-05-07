import { _decorator, Component, Node, Prefab } from "cc";
import { SceneManager } from "./sceneManager";
const { ccclass, property } = _decorator;

@ccclass("sceneManager")
export class LocalGame extends SceneManager {
  start() {}
  update(deltaTime: number) {}
}
