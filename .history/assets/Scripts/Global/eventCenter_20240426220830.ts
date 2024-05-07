import {
  _decorator,
  director,
  log,
  resources,
  Node,
  instantiate,
  Prefab,
  Label,
} from "cc";
import { SceneManager } from "../Manager/sceneManager";
import { GameMap } from "../GameConfig/Maps/map_1";
import { landBlock } from "../GameObject/LocalGame/landBlock";

const { ccclass, property } = _decorator;
export const eventCenter = {
  mainMenu: {
    startLocalGame: () => {
      director.loadScene("localGame");
    },
  },
  localGame: {
    backToMainMenu: () => {
      director.loadScene("mainMenu");
    },
    initMap: (map: GameMap) => {
      (this as SceneManager).managedScene.addChild(new Node("TheGameMap"));
      resources.load("prefabs/landBlock", Prefab, (err, prefab) => {
        map.lands.forEach((landData) => {
          const newLand = instantiate(prefab);
          (this as SceneManager).allNodes.TheGameMap.addChild(newLand);
          newLand.getComponent(landBlock).data = landData;
        });
      });
    },
  },
};

class EventBus {
  private eventList: Map<string, Function[]> = new Map();

  public emit(eventName: string, args?: Array<any>) {
    if (this.eventList.has(eventName)) {
      this.eventList.get(eventName).forEach((func) => {
        if (args) {
          func(...args);
        } else {
          func();
        }
      });
    } else return;
  }

  public on(eventName: string, callback: Function) {
    //如果没有该事件，则注册监听
    if (!this.eventList.has(eventName)) {
      this.eventList.set(eventName, [callback]);
    } else {
      this.eventList.get(eventName).push(callback);
    }
  }

  public once(eventName: string, callback: Function) {
    if (!this.eventList.has(eventName)) {
      this.eventList.set(eventName, [
        callback,
        () => {
          this.eventList.delete(eventName);
        },
      ]);
    } else {
      this.eventList.get(eventName).unshift(callback);
    }
  }
}
export const eventBus = new EventBus();
