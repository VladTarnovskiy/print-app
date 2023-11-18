// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { RootState } from '../store';

// interface History {
//   variable: string;
//   inputData: string;
//   header: string;
// }

// interface InitialState {
//   status: '' | 'loading' | 'succeeded' | 'failed';
//   inputData: string;
//   variables: string;
//   header: string;
//   response: string;
//   error: string;
//   history: Array<History>;
// }

// interface FetchInputs {
//   query: string;
//   variables: string;
//   headers: string;
// }

// const initialState: InitialState = {
//   status: '',
//   inputData: `query GetRick ($page: Int, $id: ID!) {
//     characters(page: $page) {
//       info {
//         count
//       }
//       results {
//         name
//         status
//         origin{
//          name
//          created
//         }
//       }
//     }
//     location(id: $id) {
//       id
//       name
//       type
//     }
//     episodesByIds(ids: [1, 2]) {
//       id
//       name
//     }
//   }`,
//   variables: `{"page": 2, "id": 3}`,
//   header: '{}',
//   response: '',
//   error: '',
//   history: [],
// };

// export const fetchDataRequest = createAsyncThunk<string, FetchInputs>(
//   'graphiql/fetchDataRequest',
//   async (data: FetchInputs) => {
//     const response = await fetch('https://rickandmortyapi.com/graphql', {
//       method: 'POST',
//       headers:
//         data.headers !== ''
//           ? {
//               'Content-Type': 'application/json',
//               ...JSON.parse(data.headers),
//             }
//           : {
//               'Content-Type': 'application/json',
//             },
//       body: JSON.stringify({
//         query: `${data.query}`,
//         variables: data.variables !== '' ? JSON.parse(data.variables) : null,
//       }),
//     });
//     const datax = await response.json();
//     const editData = JSON.stringify(datax, null, '\t');
//     return editData;
//   }
// );

// export const MainPageSlice = createSlice({
//   name: 'editorInfo',
//   initialState,
//   reducers: {
//     setInputData: (state, { payload }) => {
//       state.inputData = payload;
//     },
//     setHeaders: (state, { payload }) => {
//       state.header = payload;
//     },
//     setVariables: (state, { payload }) => {
//       state.variables = payload;
//     },
//     setResponse: (state, { payload }) => {
//       state.response = payload;
//     },
//     setHistoryItem: (state) => {
//       state.history.push({
//         variable: state.variables,
//         inputData: state.inputData,
//         header: state.header,
//       });
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(fetchDataRequest.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchDataRequest.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.response = action.payload;
//       })
//       .addCase(fetchDataRequest.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message || 'error';
//       });
//   },
// });
// export default MainPageSlice.reducer;

// export const {
//   setInputData,
//   setHeaders,
//   setVariables,
//   setResponse,
//   setHistoryItem,
// } = MainPageSlice.actions;

// export const selectInputDataValue = (state: RootState) =>
//   state.mainPage.inputData;
// export const selectVariablesValue = (state: RootState) =>
//   state.mainPage.variables;
// export const selectHeadersValue = (state: RootState) => state.mainPage.header;
// export const selectResponseValue = (state: RootState) =>
//   state.mainPage.response;
// export const selectResponseStatus = (state: RootState) => state.mainPage.status;
// export const selectResponseError = (state: RootState) => state.mainPage.error;
// export const selectHistory = (state: RootState) => state.mainPage.history;
