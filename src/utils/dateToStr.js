

const dateToStr = dateObj => {
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    const dayOutput = day < 10 ? `0${day.toString()}` : day.toString();
    const monthOutput = month < 10 ? `0${month.toString()}` : month.toString();
    const yearOutput = year.toString();
    
    return `${monthOutput}/${dayOutput}/${yearOutput}`;
};

export default dateToStr;