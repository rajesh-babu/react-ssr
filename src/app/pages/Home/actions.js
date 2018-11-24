import { service } from '@utils';
import * as types from './types';

// async/await example of making todo api request
export const fetchCMSData = (req) => {
  return async (dispatch, getState, { requestError }) => {
    try {
      await dispatch({ type: types.FETCH_CMSDATA_BEGIN });
      const res = await service.get('/getCMSData?reqURL='+req.url);
      return dispatch({
        type: types.FETCH_CMSDATA_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: types.FETCH_CMSDATA_FAILURE });
      dispatch(requestError(err));
    }
  };
};

// pre-fetch todos when there is no populated todos in store
export const prefetchCMSData = (match, req) => (dispatch, getState) => {
    const { isFetching_cmsData, isFetched_cmsData } = getState().cmsData;
  
    // no action when it's fetching todos
    // or, todos is already fetched
    if (isFetching_cmsData || isFetched_cmsData) {
      return Promise.resolve(true);
    }
  
    // else, just proceed to fetching new todos list
    return dispatch(fetchCMSData(req));
  };