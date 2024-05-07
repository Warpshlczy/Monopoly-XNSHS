import { Scene, Node } from "cc";
//在SceneManager里面调用，获取当前场景内所有的Node
export const getAllNodesInScene = (scene: Scene, ref: any) => {
  ref = scene.children;
  ref.forEach((node: Node) => {
    if (node.children.length) {
      ref.push(...node.children);
    }
  });
};
