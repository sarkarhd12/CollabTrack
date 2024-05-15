import React from 'react'
import SubscriptionCard from './SubscriptionCard';
import { useSelector } from 'react-redux';

const paidPlan=[
    "Add unlimited project",
    "Access to love chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Customization Option",
    "Integration Support",
    "Access Control",
    "Custom Workflows" 
]

const annualPlan=[
    "Add unlimited project",
    "Access to love chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Everything Which monthly plan has"
];

const freePlan=[
    "Add only 3 projects",
    "Basic task management",
    "Project Collaboration",
    "basic Reporting",
    "Email Notifications",
    "Basic Access control"
]



const Subscription = () => {

  const {subscription}=useSelector(store=>store)
  return (
    <div className='p-10'>
        
        <h1 className='text-5xl font-semibold py-5 pb-16 text-center'>Pricing</h1>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-9'>
           
            <SubscriptionCard
             data={ {
              planName:"Free", 
            features:freePlan,
            planType:"FREE",
            price:0,
            buttonName: subscription.userSubscription?.planType == "FREE" ?
             "Current plan":"Get Started"}} />

           <SubscriptionCard 
            data={ {
              planName:"Monthly Paid Plan", 
            features:paidPlan,
            planType:"MONTHLY",
            price:799,
            buttonName:  subscription.userSubscription?.planType == "MONTHLY" ?
             "Current plan":"Get Started"}}
           />
           <SubscriptionCard 
            data={ {
              planName:"Annual Paid Plan", 
            features:annualPlan,
            planType:"ANNUALLY",
            price:6711,
            buttonName:  subscription.userSubscription?.planType == "ANNUALLY" ?
             "Current plan":"Get Started"}}
           />

        </div>

    </div>
  )
}

export default Subscription