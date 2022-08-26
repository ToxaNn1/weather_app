
export const getYesterday = () => {
    let yesterday = new Date(Date.now() - 86400000);
    let year = yesterday.getFullYear();
    let month = yesterday.getMonth();
    let day = yesterday.getDate();
    let result = [year, month + 1, day].join("-");
    return result;
};
