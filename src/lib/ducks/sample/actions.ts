import * as sampleTypes from './types';

//#region Sample Requested Action
export type SampleRequestedAction = {
    type: typeof sampleTypes.SAMPLES_REQUESTED,
    data: object
}
export const getSampleRequestedAction = (data: object) => ({
    type: sampleTypes.SAMPLES_REQUESTED,
    data
})
//#endregion

export type SampleActions = SampleRequestedAction;