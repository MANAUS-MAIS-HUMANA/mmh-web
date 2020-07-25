import React from 'react';

import Layout from '../../components/layout'
import { Container, MainBody, SideHistory, MiddleCharts } from './styles'
import DashboardHeader from '../../components/dashboard/dashboardHeader'
import AmountCollected from '../../components/dashboard/amountCollected'
import DashboardHistory from '../../components/dashboard/dashboardHistory'
import GoalsBars from '../../components/dashboard/goalsBars'
import ChartByMonth from '../../components/dashboard/chartByMonth'
import NeighborhoodChart from '../../components/dashboard/neighborhoodChart'

const Dashboard = () => {

    return (
        <Layout>
            <Container>
                <MainBody>
                    <DashboardHeader />
                    <AmountCollected />
                    <GoalsBars />
                    <MiddleCharts>
                        <ChartByMonth />
                        <NeighborhoodChart />
                    </MiddleCharts>
                </MainBody>

                <SideHistory>
                    <DashboardHistory />
                </SideHistory>

            </Container>
        </Layout>
    )
}

export default Dashboard;
