function superbowlWin(record){
        let findResults = record.find(findWin)
        if(!!findResults === true){
            return findResults.year
        } else{
            return undefined
        }
    }

function findWin(record){
return record.result === "W"
}
