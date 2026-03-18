export interface Loan<T> {
    item: T;
    borrowerId: number;
    loanDate: Date;
}

export class LoanManager<T extends { id: number }> {
    private loans: Loan<T>[] = [];

    borrow(item: T, borrowerId: number): void {
        this.loans.push({
            item,
            borrowerId,
            loanDate: new Date()
        });
    }

    returnItem(itemId: number): void {
        this.loans = this.loans.filter(l => l.item.id !== itemId);
    }

    getLoans(): Loan<T>[] {
        return this.loans;
    }
}