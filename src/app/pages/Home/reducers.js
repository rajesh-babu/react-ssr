import * as types from './types';

const initialState = {
  isFetching_cmsData: false,
  isFetched_cmsData: false,
  data_cmsData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CMSDATA_BEGIN:
      return Object.assign({}, state, { isFetching_cmsData: true, isFetched_cmsData: false });

    case types.FETCH_CMSDATA_FAILURE:
      return Object.assign({}, state, { isFetching_cmsData: false, isFetched_cmsData: false });

    case types.FETCH_CMSDATA_SUCCESS:
      return {
        isFetching_cmsData: false,
        isFetched_cmsData: true,
        data_cmsData: action.payload
      };

    default:
      return state;
  }
};
