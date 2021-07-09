export const DndData = (infrontData, AfterData, data) => {
    if(AfterData === 0){
        return `first`
    } else if(AfterData === data.length-1) {
        return `last`
    } else if(AfterData > infrontData){
        return `after:${data[AfterData].id}`
    } else {
        return `after:${data[AfterData-1].id}`
    }
}