import { Scene, Node, log } from "cc";

//在SceneManager基类内调用，获取当前场景内所有的Node以及其Components的实例对象并重新封装
export const getAllNodesInScene = (scene: Scene) => {
  const _ref = {};
  const findComAndChildren = (node: Node) => {
    for (const comp of node.components) {
      const compName = comp.name.split(/[<>]/)[1];
      const sameCompLength = node.getComponents(compName).length;
      log(node.getComponents(compName));
      if (sameCompLength > 1) {
        let times = 0;
        while (times < node.getComponents(compName).length) {
          const _compName = `$${compName}_${times + 1}`;
          if (!node[_compName]) {
            node[_compName] = comp;
            break;
          } else times++;
        }
      } else node[`${compName}`] = comp;
    }
    _ref[node.name] = node;
    if (node.children.length) {
      node.children.forEach((child: Node) => {
        node[child.name] = child;
        findComAndChildren(child);
      });
    } else return;
  };
  scene.children.forEach((node: Node) => {
    findComAndChildren(node);
  });

  return _ref;
};
//重命名预制体
export const renamePrefab = (prefab: Node, name: string) => {
  prefab.name = name;
};
//克隆节点
export const simpleClone = (obj: any) => {
  const objResult = {};
  for (const key in obj) {
    objResult[key] = obj[key];
  }
  return objResult;
};
