function isLeapYear(year: number) {
    if (year % 4 != 0) {
        return false;
    }
    return true;
}

export default isLeapYear
