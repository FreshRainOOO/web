type List = {
    title: string
    content?: any
}
const mdFiles = import.meta.glob('../markdowns/**/*.md')
//https://vitejs.cn/vite3-cn/guide/features.html#glob-import

export default mdFiles