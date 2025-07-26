const { spawn } = require('child_process');
const component = process.argv[2];

if (!component) {
    console.error('❌ 请输入要测试的组件名');
    process.exit(1);
}

const command = 'vue';
const args = ['serve', `./src/components/${component}/test.vue`];

const child = spawn(command, args, {
    stdio: 'inherit', // 关键！继承父进程的 stdio，实时输出
    shell: true       // 让 spawn 像在终端运行一样
});

child.on('exit', (code) => {
    process.exit(code);
});