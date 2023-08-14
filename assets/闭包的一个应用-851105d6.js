const e={},n=`<p>需求：需要动态显示相应层级树的数据,且只能选择当前层级数据</p>
<pre><code class="language-ts">type Tree = {
  disabled: boolean,
  Children: Tree[] 
};
/**
 * @param dataTree 数据源数组
 * @param level 要返回的层级数
 * @returns 该层级及其父级的数组
 */
const checkTreeType = (dataTree: Tree[], level: number) =&gt; {
  let curLevel = 1;
  const fn = (dataTree: Tree[], level: number, currentLevel: number) =&gt; {
    let data: Tree[] = [];
    dataTree.forEach((item) =&gt; {
      let obj = { ...item };
      if (currentLevel == level) {
        obj.Children = null;
      } else {
         obj.disabled = true //配合antd的TreeSelect使用 禁止选择父级
        obj.Children = fn(item.Children, level, currentLevel + 1);
      }
      data.push(obj);
    });
    return data;
  };
  return fn(dataTree, level, curLevel);
};
</code></pre>
<p>需求: 获取当前节点的父节点
path 按顺序来的数组   treeData 有层级的数组</p>
<pre><code class="language-ts"> //获取当前节点及其父节点
 function treeFindPath(tree: TreeLike&lt;DataNode&gt;[], menuid: string) {
  var path: TreeLike&lt;DataNode&gt;[] = [];//扁平的数组
  if (!tree) return [];
  var forFn = function (tree: TreeLike&lt;DataNode&gt;[], menuid: string): any {
    for (var i = 0; i &lt; tree.length; i++) {
      var data = tree[i];
      path.push(data);
      if (data.category_id == menuid) return path;
      if (data.children) {
        const findChildren = forFn(data.children, menuid);
        if (findChildren) return findChildren
      }
      path.pop()
    }
  }
  forFn(tree, menuid);
  let treeData = [] //将扁平的数组,重新变成树型结构

  for (let index = 1; index &lt;= path.length; index++) {
    const curElement = path[path.length - index];
    const preElement = path[path.length - index - 1]

    index == 1 &amp;&amp; (curElement.children = []) //最后一个元素 清空children
    preElement ? (preElement.children = [curElement]) : treeData.push(curElement)
  }
  return treeData;
}
</code></pre>
`,t=[];export{e as attributes,n as html,t as toc};
