


function fetch(path){
    // reads data
    res= "trends";
    convertToJSON(res);
}

function convertToJSON(res){
    // convers to json
    const result = res.json();
    assignData(result);

}

function assignData(convertedData){
    trendData = convertedData;
}

trendData;

function setTrendData(data){
    trendData=data;
}