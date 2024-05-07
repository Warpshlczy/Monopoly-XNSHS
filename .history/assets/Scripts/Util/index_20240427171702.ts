import { Scene, Node, log } from "cc";

//在SceneManager基类内调用，获取当前场景内所有的Node以及其Components的实例对象并重新封装
export const getAllNodesInScene = (scene: Scene) => {
  const ref = [];
  const _ref = {};
  const findChildren = () => {};
  scene.children.forEach((node: Node) => {
    ref.push(node);
    if (node.children.length) {
      ref.push(...node.children);
    }
  });
  ref.forEach((node: any) => {
    for (const comp of node.components) {
      node[comp.name.split(/[<>]/)[1]] = comp;
    }
    _ref[node.name] = node;
  });
  return _ref;
};
export const renamePrefab = (prefab: Node, name: string) => {
  prefab.name = name;
};
