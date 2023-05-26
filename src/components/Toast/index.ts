import { createVNode, render } from 'vue';

import toastTemplate from './index.vue';

export interface IProps {
    value?: string,
    duration?: number,
    background?: string,
    color?: string
}

// 默认参数实现
const defaultOpt = {
    duration: 3000
}

export interface ResultParams {
    destory?: () => void
}

const Toast = (options: IProps): ResultParams => {
    const container = document.createElement('div');
    const opt = { ...defaultOpt, ...options };
    // 1.创建vNode
    const vm = createVNode(toastTemplate, opt);
    // 2.添加到Body上面
    render(vm, container)
    const destory = () => {
        const dom = vm.el as HTMLDivElement;
        if (dom.querySelector('.toast-value')) {
            // 销毁时候，加入了淡入淡出效果
            dom.querySelector('.toast-value')?.classList.add('remove');
            const t = setTimeout(() => {
                render(null, container);
                document.body.removeChild(container)
                clearTimeout(t)
            }, 500)
        }

    }
    // 如果传入参数是0，持续此时保持内容
    if (opt.duration) {
        const timer = setTimeout(() => {
            destory();
            clearTimeout(timer);
        }, opt.duration)
    }

    return {
        destory
    }

}


export default Toast;
