import {create} from 'zustand';

// define the store 
// store -stores the states of variables
// in short we have global variables here 

const useCounterStore = create(
    (set)=>({
        count :0,// initial state
        increment:()=>set((state)=>({count:state.count+1})),
        decrement:()=>set((state)=>({count:state.count-1}))

    })
);

export default useCounterStore;


