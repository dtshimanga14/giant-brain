const { getAll } = require('./query.js')('survey');

const getAllSurvey = async () => {
    let data = []; 
    await getAll().then((res) => data.push(res));

    if(data.length === 0){
        return { message: 'No data found' };
    }
    return data;
};

module.exports = {
    getAllSurvey
};
