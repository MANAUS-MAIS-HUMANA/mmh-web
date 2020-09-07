import React from 'react';

import DashboardHeader from '../../components/dashboard/dashboardHeader';
import AmountCollected from '../../components/dashboard/amountCollected';
import GoalsBars from '../../components/dashboard/goalsBars';
import ChartByMonth from '../../components/dashboard/chartByMonth';
import NeighborhoodChart from '../../components/dashboard/neighborhoodChart';
import GreatestDonors from '../../components/dashboard/greatestDonors';

import {
    Container,
    MainBody,
    SideHistory,
    MiddleCharts,
} from './styles';

const Dashboard = () => {

    return (
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
                <GreatestDonors />
            </SideHistory>

        </Container>
    )
}

export default Dashboard;
