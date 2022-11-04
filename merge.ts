// input collection_1 and collection_2 here
export interface dataMerge{
    collection_1:number[];
    collection_2:number[];
}


function merge (collection_1 : number[],collection_2 :number[]):number[] {
        let indexC1:number = 0;
        let indexC2:number = 0;
        let arrayMerge:number[]   = [];
        while(indexC1 < collection_1.length && indexC2 < collection_2.length) {
            // push less value into array
            if(collection_1[indexC1] > collection_2[indexC2]) {
                arrayMerge.push(collection_2[indexC2]);
                indexC2++;
            }
            else {
                arrayMerge.push(collection_1[indexC1]);
                indexC1++;
            }
        };
        // if collection_1 still has number
        while(indexC1 < collection_1.length) {
            arrayMerge.push(collection_1[indexC1]);
            indexC1++;
        }
        // if collection_2 still has number
        while(indexC2 < collection_2.length) {
            arrayMerge.push(collection_2[indexC2]);
            indexC2++;
        }
    
        return arrayMerge;
}
