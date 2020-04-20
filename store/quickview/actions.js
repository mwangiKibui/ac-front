
import { QUICKVIEW_CLOSE, QUICKVIEW_OPEN } from './types';


export function quickviewOpenSuccess(data) {
    return {
        type: QUICKVIEW_OPEN,
        payload:data,
    };
}

export function quickviewClose() {
    return {
        type: QUICKVIEW_CLOSE,
    };
};

//we shall be sending the _id and the data to look up from 
//because the data can be really different

export function quickviewOpen(_id,data) {
    // sending request to server, timeout is used as a stub
    return (dispatch) => (
        new Promise((resolve) => {
            setTimeout(() => {
                const element = data.find(elem => elem._id === _id);

                if (element) {
                    dispatch(quickviewOpenSuccess(element));
                }

                resolve();
            }, 2000);
        })
    );
}
