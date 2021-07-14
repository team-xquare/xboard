export const DndData = (type, infrontData, AfterData, data:any[]) => {
    console.log(data)
    if(AfterData === 0){
        return type === 'Columns' ? `first` : `top`
    } else if(AfterData === data.length-1) {
        return type === 'Columns' ? `last` : `bottom`
    } else if(AfterData > infrontData){
        return `after:${data[AfterData].id}`
    } else {
        return `after:${data[AfterData-1].id}`
    }
}