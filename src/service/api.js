import axios from "axios";

export const getMailsApi = async() => {
try {
    return await axios.get('https://flipkart-email-mock.now.sh/');
} catch (error) {
    console.log(`Error in getMailsApi ${error}`);
}
}

export const getMailBodyApi = async(id) => {
 try {
     return await axios.get(`https://flipkart-email-mock.now.sh/?id=${id}`);
 } catch (error) {
        console.log(`Error in getMailBodyApi ${error}`);
 }

}
