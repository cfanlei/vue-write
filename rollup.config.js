// 默认可以导出一个对象，作为打包的配置文件
import babel from 'rollup-plugin-babel'
export default{
    input: './src/index.js',
    output: {
        file:'./dist/vue.js',
        name:'Vue', //global.Vue
        format:'umd', // 模块 esm es6
        sourceMap:true
    },
    plugin :[
        babel({
            exclude:'node_modules/**'
        })
    ]
}