const n={},e=`<h1>单例模式</h1>
<blockquote>
<p>节约资源</p>
</blockquote>
<pre><code class="language-ts">// 定义一个类
class HttpRequest {
  instance: AxiosInstance;
  constructor(options: CreateAxiosOptions) {
    this.instance = axios.create(options)
  }

  setHeader() {...}
  get() {...}
  post() {...}
  put() {...}
  delete() {...}
}
// 生成一个实例
const request = new HttpRequest({})

// 全局仅用这么一个请求实例
export default request
</code></pre>
<pre><code class="language-ts">import request '@/utils/request'

const fetchData = (url) =&gt; {
  return request.get(url)
}
</code></pre>
<h1>工厂模式</h1>
<blockquote>
<p>快速创建对象</p>
</blockquote>
<pre><code class="language-js">//如document.createElement
export function createElement(tag, data, children) {
  //....各种判断 判断生成什么样的Vnode
  if (!tag) {
    return createEmptyVNode();
  }
  return new VNode(tag, data, children);
}
</code></pre>
<h1>适配器模式</h1>
<blockquote>
<p>匹配对象,转成统一结构</p>
</blockquote>
<pre><code class="language-js">const data1 = [{ age1: 20, name1: &quot;lmd&quot; }]; //queryData
// 格式2
const data2 = [{ age2: 20, name2: &quot;lmd&quot; }]; //queryData
// 格式3
const data3 = [{ age3: 20, name3: &quot;lmd&quot; }]; //queryData
export const adapter = {
  adapterType1() {
    return {
      age: ag1,
      name: name1,
    };
  },
  adapterType2(list: bookDataType2[]) {
    return {
      age: ag2,
      name: name2,
    };
  },
  adapterType3(list: bookDataType3[]) {
    return {
      age: age3,
      name: name3,
    };
  },
};
const data = {
  ...adapter.adapterType1(queryData),
  ...adapter.adapterType2(queryData),
  ...adapter.adapterType3(queryData),
};
</code></pre>
<h1>装饰器模式</h1>
<blockquote>
<p>拓展功能</p>
</blockquote>
<pre><code class="language-js">class Man {
  say() {
    console.log(&quot;我是普通人&quot;);
  }
}
class Man2SuperMan {
  man: Man;
  constructor(man) {
    this.man = man;
  }
  say() {
    this.man.say();
    console.log(&quot;我变成超人啦！&quot;);
  }
}

const man = new Man();
const superMan = new Man2SuperMan(man);
man.say();
// 我是普通人
superMan.man();
// 我是普通人
// 我变成超人啦！
</code></pre>
<h1>策略模式</h1>
<blockquote>
<p>避免 if 判断,使用 Map 易扩展,好阅读</p>
</blockquote>
<pre><code class="language-js">/** if写法
  const doSomething = (age: number) =&gt; {
   if(age==20){
    return ()=&gt;//dosomething
 }
 if(age==30){
    return ()=&gt;//dosomething
 }
 if(age==40){
    return ()=&gt;//dosomething
 }
}
 */

const doMap: Record&lt;number, Function&gt; = {
  20: () =&gt; { // do something },
  30: () =&gt; { // do something },
  40: () =&gt; { // do something },
}

const doSomething = (age: number) =&gt; {
  doMap[age]?.()
}
</code></pre>
<pre><code class="language-js">//匹配过多可使用Map类型
const doMap = new Map([
  [20, () =&gt; {}],
  [30, () =&gt; {}],
  [40, () =&gt; {}],
]);
const doSomething = (age: number) =&gt; {
  doMap.get(age)();
};
</code></pre>
<h1>观察者模式</h1>
<blockquote>
<p>定义一对多关系,当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知</p>
</blockquote>
<pre><code class="language-js">class Subject {
  count: number;
  observers: any[];
  constructor() {
    this.count = 0;
    this.observers = [];
  }
  getCount() {
    return this.count;
  }
  setCount(count: number) {
    // 设置值之后通知更新
    this.count = count;
    this.notify();
  }
  notify() {
    this.observers.forEach((o) =&gt; {
      o.update();
    });
  }
  push(o) {
    this.observers.push(o);
  }
}

class Observer {
  constructor(name: string, sub: Subject) {
    this.name = name;
    this.subject = sub;
    this.subject.push(this);
  }
  update() {
    console.log(\`\${this.name} 变了 \${this.subject.getCount()}\`);
  }
}

const sub = new Subject();
// 观察一号
const observer1 = new Observer(&quot;一号&quot;, sub);
// 观察二号
const observer2 = new Observer(&quot;二号&quot;, sub);

sub.setCount(1);
// 一号 变了 1
// 二号 变了 1
</code></pre>
<h1>发布订阅模式</h1>
<blockquote>
<p>在观察者模式中间加入调度中心</p>
</blockquote>
<pre><code class="language-js">class Event {
  constructor() {
    this.eventEmitter = {};
  }

  // 订阅
  on(type, fn) {
    if (!this.eventEmitter[type]) {
      this.eventEmitter[type] = [];
    }
    this.eventEmitter[type].push(fn);
  }

  // 取消订阅
  off(type, fn) {
    if (!this.eventEmitter[type]) {
      return;
    }
    this.eventEmitter[type] = this.eventEmitter[type].filter((event) =&gt; {
      return event !== fn;
    });
  }

  // 发布
  emit(type) {
    if (!this.eventEmitter[type]) {
      return;
    }
    this.eventEmitter[type].forEach((event) =&gt; {
      event();
    });
  }
}
</code></pre>
`,t=[{level:"1",content:"&#x5355;&#x4F8B;&#x6A21;&#x5F0F;"},{level:"1",content:"&#x5DE5;&#x5382;&#x6A21;&#x5F0F;"},{level:"1",content:"&#x9002;&#x914D;&#x5668;&#x6A21;&#x5F0F;"},{level:"1",content:"&#x88C5;&#x9970;&#x5668;&#x6A21;&#x5F0F;"},{level:"1",content:"&#x7B56;&#x7565;&#x6A21;&#x5F0F;"},{level:"1",content:"&#x89C2;&#x5BDF;&#x8005;&#x6A21;&#x5F0F;"},{level:"1",content:"&#x53D1;&#x5E03;&#x8BA2;&#x9605;&#x6A21;&#x5F0F;"}];export{n as attributes,e as html,t as toc};
