import { Scene, Node, log } from "cc";

//在SceneManager基类内调用，获取当前场景内所有的Node以及其Components的实例对象并重新封装
export const getAllNodesInScene = (scene: Scene) => {
  const ref = [];
  const _ref = {};
  scene.children.forEach((node: Node) => {
    ref.push(node);
    if (node.children.length) {
      ref.push(...node.children);
    }
  });
  ref.forEach((node: Node) => {
    for (const comp of node.components) {
      node[comp.name.split(/[<>]/)[1]] = comp;
    }
    _ref[node.name] = node;
    log(!!node.name);
  });
  return _ref;
};
