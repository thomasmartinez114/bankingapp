import Link from 'next/link';
import React from 'react'

const RecentTransactions = ({
    accounts,
    transactions = [],
    appwriteItemId,
    page = 1
}: RecentTransactionsProps) => {
  return (
      <section className='recent-transactions'>
          <header className="flex items-center justify-between">
              <h2 className="recent-transactions-label">Recent Transactions</h2>
              <Link href={`/transactions-history/?id=${appwriteItemId}`} className='view-all-btn'>View All</Link>
          </header>
    </section>
  )
}

export default RecentTransactions