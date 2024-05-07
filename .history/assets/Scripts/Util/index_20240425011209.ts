import { Scene, Node } from "cc";

//在SceneManager基类内调用，获取当前场景内所有的Node以及其Components的实例对象并重新封装
export const getAllNodesInScene = (scene: Scene) => {
  const ref = [];
  const _ref = {};
  scene.children.forEach((node: Node) => {
    if (node.children.length) {
      ref.push(...node.children);
    }
  });
  ref.forEach((node: Node) => {
    const _components = {};
    for (const comp of node.components) {
      _components[comp.name.split(/[]/] = comp;
    }
    _ref[node.name] = {
      ...node,
      ..._components,
    };
  });
  return _ref;
};
