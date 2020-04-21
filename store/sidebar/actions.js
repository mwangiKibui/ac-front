import {SIDEBAR_CLOSE,SIDEBAR_OPEN} from './types';

export function sidebarOpen(){
    return {
        type:SIDEBAR_OPEN
    };
};

export function sidebarClose(){
    return {
         type:SIDEBAR_CLOSE
    }
}