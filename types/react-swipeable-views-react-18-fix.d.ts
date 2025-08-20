declare module 'react-swipeable-views-react-18-fix' {
    import * as React from 'react';

    export interface SwipeableViewsProps {
        axis?: 'x' | 'x-reverse' | 'y' | 'y-reverse';
        index?: number;
        onChangeIndex?: (index: number, indexLatest: number) => void;
        onSwitching?: (index: number, type: 'move' | 'end') => void;
        onTransitionEnd?: () => void;
        disabled?: boolean;
        enableMouseEvents?: boolean;
        hysteresis?: number;
        ignoreNativeScroll?: boolean;
        resistance?: boolean;
        slideClassName?: string;
        slideStyle?: React.CSSProperties;
        springConfig?: {
            duration: string;
            easeFunction: string;
            delay: string;
        };
        style?: React.CSSProperties;
        slideRenderer?: (index: number) => React.ReactNode;
        children?: React.ReactNode;
        className?: string;
    }

    export default class SwipeableViews extends React.Component<SwipeableViewsProps> { }
}

declare module 'react-swipeable-views-utils-react-18-fix' {
    export function autoPlay(component: any): any;
} 