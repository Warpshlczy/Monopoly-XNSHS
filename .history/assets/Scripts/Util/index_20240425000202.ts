import { Scene, Node } from "cc";
//在SceneManager里面调用，获取当前场景内所有的Node
export const getAllNodesInScene = (scene: Scene) => {
  const ref = [];
  const _ref = {};
  scene.children.forEach((node: Node) => {
    if (node.children.length) {
      ref.push(...node.children);
    }
  });
  ref.forEach((node: Node) => {
    _ref[node.name] = node;
  });
  return _ref;
};
