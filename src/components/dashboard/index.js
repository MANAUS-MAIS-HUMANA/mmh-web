import React, { useState, useEffect } from 'react';

import to from 'await-to-js';

import api from '../../services/api';
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

    const basicDashboardInfo = {
        valor_arrecadados: 0.0,
        meta_valor_arrecadacao: 0.0,
        cestas_doadas: 0.0,
        meta_cestas_doadas: 0.0,
        pessoas_impactadas: 0.0,
        meta_pessoas_impactadas: 0.0,
        familias_atendidas: 0.0,
        meta_familias_atendidas: 0.0,
        instituicoes_contemplada: 0.0,
        zonas: {
            sul: 0.0,
            oeste: 0.0,
            norte: 0.0,
            leste: 0.0,
            centro_sul: 0.0,
            centro_oeste: 0.0,
        },
        arrecadacao_mensal: [
            { x: 'Abril', y: 0.0 },
            { x: 'Maio', y: 0.0 },
            { x: 'Junho', y: 0.0 },
        ],
    };

    const [shouldGetDashboardData, SetShouldGetDashboardData] = useState(true);
    const [dashboardData, SetDashboardData] = useState(basicDashboardInfo);

    useEffect(() => {
        async function getDashboardData() {
            const [ error, response ] = await to(api.get('/dashboard'));

            if (error) {
                return [];
            }

            SetDashboardData(response.data.data);
        }

        if (shouldGetDashboardData) {
            getDashboardData();
            SetShouldGetDashboardData(false);
        }
    }, [shouldGetDashboardData]);

    return (
        <Container>
            <MainBody>
                <DashboardHeader />
                <AmountCollected
                    collectedAmount={dashboardData.valor_arrecadados}
                    basicBasketsDonated={dashboardData.cestas_doadas}
                    targetBasicBaskets={dashboardData.meta_cestas_doadas}
                    benefitedPeople={dashboardData.pessoas_impactadas}
                />
                <GoalsBars
                    targetBenefitedPeople={dashboardData.meta_pessoas_impactadas}
                    benefitedPeople={dashboardData.pessoas_impactadas}
                    targetBasicBaskets={dashboardData.meta_cestas_doadas}
                    basicBasketsDonated={dashboardData.cestas_doadas}
                    targetCollectedAmount={dashboardData.meta_valor_arrecadacao}
                    collectedAmount={dashboardData.valor_arrecadados}
                />
                <MiddleCharts>
                    <ChartByMonth amountByMonth={dashboardData.arrecadacao_mensal} />
                    <NeighborhoodChart donationsByZone={dashboardData.zonas} />
                </MiddleCharts>
            </MainBody>

            <SideHistory>
                <GreatestDonors />
            </SideHistory>

        </Container>
    )
}

export default Dashboard;
