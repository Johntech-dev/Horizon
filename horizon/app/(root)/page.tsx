import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

  const  loggedIn = {firstName: 'John', lastName:'Akinmolayan', email: 'johntechdev@gmail.com'};

  return (
    <section className='home'>
       <div className='home-content'>
        <header className='home-headers'>
        <HeaderBox
         type="greeting"
         title="Welcome"
         user={loggedIn?.firstName || 'Guest'}
         subtext="Acesss and manage your account and transactions with horizons efficiently "
        />
        <TotalBalanceBox
         account={[]}
         totalBanks={1}
         totalCurrentBalance={1225.30}
        />
        </header>
        RECENT TRANSACTIONS
       </div>
       <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{}, {}]}
       /> 
    </section>
  )
}

export default Home