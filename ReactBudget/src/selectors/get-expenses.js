
// Get visible expenses
export default (expenses, { text, sortBy,  startDate, endDate } ) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createDate >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createDate <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createDate < b.createDate ? 1: -1;
        }
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};