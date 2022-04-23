const axios = require('axios');

export const getPirates = async () =>{
    try {
        const res = await axios.get('/api/pirates');
        return res.data;
    } catch (err) {
        return err.response.data.errors;
    }
}

export const createNewPirate = async (pirate) => {
    try {
        const res = await axios.post('/api/pirate/new', {pirate});
        return res;
    } catch (err) {
        
        return err.response.data.errors;
    }
}
export const getPirateById = async (id) => {
    console.log(id);
    try {
        const res = await axios.get(`/api/pirate/${id}`);
        return res;
    } catch (err) {
        return err.response.data.errors;
    }
}
export const deletePirateById = async (id) => {
    try {
        const res = await axios.delete(`/api/pirate/delete/${id}`);
        return res;
    } catch (err) {
        return err.response.data.errors;
    }
}
export const changeFeatures = async (id, feature) =>{
    try {
        const res = await axios.post(`/api/pirate/changefeatures/${feature}/${id}`)
    } catch (err) {
        return err.response.data.errors;
    }
}
