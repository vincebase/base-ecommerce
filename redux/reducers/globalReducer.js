import { GLOBAL } from '../defines';

const initialState = {
  language: 'Englisg',
  currency: {
    locales: 'us-US',
    currency: 'USD',
  },
  category: 'Clothing',
  keyword: '',
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL.SET_LANGUAGE:
      return {
        ...state,
        language: action.lang,
      };
    case GLOBAL.SET_CURRENCY:
      return {
        ...state,
        currency: {
          locales:
            action.cur === 'JPY'
              ? 'jp-JP'
              : action.cur === 'VND'
              ? 'vn-VN'
              : 'en-EN',
          currency: action.cur,
        },
      };
    case GLOBAL.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case GLOBAL.SET_SEARCH:
      return {
        ...state,
        keyword: action.keyword,
      };
    default:
      return state;
  }
};

export default globalReducer;
