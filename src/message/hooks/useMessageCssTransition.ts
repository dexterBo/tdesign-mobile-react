import { useRef } from 'react';
import ReactDOM from 'react-dom';
import identity from 'lodash/identity';

interface UseMessageCssTransitionParams {
  contentRef: React.MutableRefObject<HTMLDivElement>;
  classPrefix: String;
  onEnter: () => void;
  onEntered: () => void;
  onExit: () => void;
  onExited: () => void;
  containerDom: React.ReactNode;
}

const useMessageCssTransition = ({
  contentRef,
  classPrefix,
  onEnter = identity,
  onEntered = identity,
  onExit = identity,
  onExited = identity,
  containerDom,
}: UseMessageCssTransitionParams) => {
  const timerRef = useRef(null);

  const contentEle = contentRef?.current;

  const messageAnimationClassPrefix = classPrefix;

  const defaultEvents = {
    onEnter: handleEnter,
    onEntered,
    onExit,
    onExited: handleExited,
  };

  function handleEnter() {
    clearTimeout(timerRef.current);
    onEnter();
    if (contentEle && contentEle.style.display === 'none') {
      contentEle.style.display = 'block';
    }
  }

  function handleExited() {
    // 动画结束后默认删除节点实例
    if (contentEle) {
      timerRef.current = setTimeout(() => {
        if (contentEle && contentEle.style.display === 'block') {
          contentEle.style.display = 'none';
        }
        // 删除createElement创建的div元素
        if (containerDom) {
          const unmountResult = ReactDOM.unmountComponentAtNode(containerDom);
          if (unmountResult) {
            (containerDom as any).parentNode.removeChild(containerDom);
          }
        }
      }, 0);
      onExited();
    }
  }

  return {
    props: {
      timeout: 200,
      nodeRef: contentRef,
      ...defaultEvents,
      // 与公共 className 保持一致
      classNames: {
        appear: `${messageAnimationClassPrefix}-enter ${messageAnimationClassPrefix}-enter-active`,
        appearActive: `${messageAnimationClassPrefix}-enter-active`,
        appearDone: `${messageAnimationClassPrefix}-enter-active ${messageAnimationClassPrefix}-enter-to`,
        enter: `${messageAnimationClassPrefix}-enter ${messageAnimationClassPrefix}-enter-active`,
        enterActive: `${messageAnimationClassPrefix}-enter-active`,
        enterDone: `${messageAnimationClassPrefix}-enter-active ${messageAnimationClassPrefix}-enter-to`,
        exit: `${messageAnimationClassPrefix}-leave ${messageAnimationClassPrefix}-leave-active`,
        exitActive: `${messageAnimationClassPrefix}-leave-active`,
        exitDone: `${messageAnimationClassPrefix}-leave-active ${messageAnimationClassPrefix}-leave-to`,
      },
    },
  };
};

export default useMessageCssTransition;
