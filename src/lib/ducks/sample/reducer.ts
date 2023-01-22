import { SampleActions } from "./actions";
("./actions");
import * as sampleTypes from "./types";

export type SampleState = {
  data: object;
};

const initialState: SampleState = {
  data: {},
};

const sampleReducer = (
  state: SampleState = initialState,
  action: SampleActions
): SampleState => {
  switch (action.type) {
    case sampleTypes.SAMPLES_REQUESTED: {
      console.log("Reducer called");
      return {
        ...state,
        data: action.data,
      };
    }

    default:
      return state;
  }
};

export default sampleReducer;
