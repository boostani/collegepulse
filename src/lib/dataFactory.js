import _ from 'lodash'


const convertToInt =   (data) => {
    return data.map((item, index) => {
            if(index === 0){
                return item;
            } else {
                if(Array.isArray(item)) {
                    return convertToInt(item); 
                } else {
                    let result = isNaN(parseInt(item)) ? 0 : parseInt(item);
                    return result
                }
               
            } 
        })
}
export default class matrics  {
    constructor(data) {
        this.data = convertToInt(data);
        this.total = this.surveySize(this.data);
    }

    get options() {
        return this.data[0]
    }
    get surveySessions() {
        return this.data.length-1
    }
    get dateRange() {
        return [this.data[1][0], this.data[this.data.length-1][0]]
    }
    get lastResult() {
        let result = this.data[this.data.length-1].reduce((prev, curr, index) => {
            return (curr > prev[0] ? [curr, index] : prev)
        })  
        return this.data[0][result[1]]
    }
    get fullData() {
        return this.data;
    }
    percentage(count){
        return Math.floor((count*100)/this.total);
    }

    get ranking() {

        let data = this.data;
        //fullHistory.shift();
        let totalVotes = data.reduce((acc, curr, index) => {
            if(index === 0) return acc;
            return curr.map((votes, index) => {
                    if(index === 0) {
                        return curr[index]
                    } else {
                        return acc[index]+votes;
                    } 
                })
        }, Array(this.data[0].length).fill(0));
        
        let stats = totalVotes.map((count, index) => {
            
            let female = Math.floor(Math.random() * 100) + 1; //mock female percentage

             return {
                candidate: this.options[index],
                firstName :this.options[index].split(" ")[0],
                count,
                percentage: this.percentage(count),
                female, //todo - replace with actual data
                male: 100-female //todo - replace with actual data


            }
        })
        stats.shift();
        stats = _.orderBy(stats, ['count'], ['desc'])
        return stats.map((item, index) => {
            return item = {...item, rank:index+1};
        })

    }


    confidenceLevel(population, interval, confidence=95, studySize) {
        //todo
        // calculate interval
        // calculate needed sample size
        // compare study size with needed sample 
        
        //temp result;
        if(studySize < 400) return false;

    }

    surveySize(arr) {
        let data = arr ? arr : this.data;
        let total =  data.reduce((acc, curr, index) => {
            if(index === 0) return acc;

            if(Array.isArray(curr)) {
                let count = this.surveySize(curr)
                return acc + count;
            }else{
                let result = (index !== 0 && Number.isInteger(curr)) ?  acc+curr : acc;
                return result;
            } 
        }, 0)
        this.total = total;
        return total;
    }

}