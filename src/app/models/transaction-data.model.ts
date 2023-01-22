export interface Transaction{
    id:number;
    transferType: string;
    user: string;
    amount: number;
    date: Date;
}