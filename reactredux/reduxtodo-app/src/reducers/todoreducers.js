const initialData={
    list:[]
}
const todoreducers=(state=initialData,action)=>{
switch(action.type){
    case "ADD_TODO":
        // diostructring the data
        const [id,data]=action.payload;
        return{
            ...state,
            data:[{
                ...state.list,
                data:data
            }]
        }
}
}
export default todoreducers;