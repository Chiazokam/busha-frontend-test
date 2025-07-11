export interface AccountType {
    id: string
    currency: string
    hold: number
    pending_balance: number
    balance: number
    name: string
    type: "fiat" | "digital"
    deposit: boolean
    payout: boolean
    imgURL: string
}
