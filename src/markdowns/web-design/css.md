## background-color 不生效

```less
position: relative; //absolute不能生效
```

## 滚动条样式

https://juejin.cn/post/6997011443967066143#heading-9

```less
/* 滚动条所在容器 */
div {
  overflow: overlay;
  /* 滚动条整体 */
  &::-webkit-scrollbar {
    height: 20px;
    width: 20;
  }
  /* 两个滚动条交接处 -- x轴和y轴 */
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  /* 滚动条滑块 */
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #535353;
  }
  /* 滚动条轨道 */
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #ededed;
  }
  /* 滚动条两端按钮 */
  &::-webkit-scrollbar-button {
  }
}
```

## 隐藏滚动条

```scss
&::-webkit-scrollbar {
  width: 0 !important;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
```

## 溢出省略号

### 单行

```less
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

### 多行

```less
text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

## 宽高相同

```less
width: 25%;
padding-top: 25%;
```

## react 修改 antd 样式

```less
//index.less
.upload {
  margin-left: 50px;
  :global {
    .ant-form-item-has-error {
      .ant-upload {
        color: red;
        border: 1px solid red;
      }
    }
    .ant-upload {
      width: 120px;
      height: 120px;
      overflow: hidden;
      border-radius: 50%;
    }
  }
  &.noml {
    margin-left: 0;
  }
}
```

```tsx
// index.tsx
import style from '.index.less';
<div className={styles.upload}>
```

## 视图区可见
```less
content-visibility: auto;
contain-intrinsic-size: auto 500px;//给一个高度撑开,避免滚动条抖动
```