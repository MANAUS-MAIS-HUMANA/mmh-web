import React, { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import { NavLink } from 'react-router-dom';

import to from 'await-to-js';

import api from '../../services/api';
import {
    Container,
    Header,
    ButtonContainer,
    TableContainer,
} from './styles';
import Layout from '../../components/layout';
import Row from '../../components/pagination/row'

const Beneficiary = () => {

    const [shouldGetBeneficiaryData, SetshouldGetBeneficiaryData] = useState(true);
    const [beneficiaryData, SetBeneficiaryData] = useState([]);
    const [page, SetPage] = useState(1);
    const [limit, SetLimit] = useState(10);

    useEffect(() => {
        async function getBeneficiaryData() {
            const [ error, response ] = await to(
                api.get(`/beneficiarios?page=${page}&limit=${limit}`),
            );

            if (error) {
                return [];
            }

            SetBeneficiaryData(response.data.data);
        }

        if (shouldGetBeneficiaryData) {
            getBeneficiaryData();
            SetshouldGetBeneficiaryData(false);
        }
    }, [shouldGetBeneficiaryData, page, limit]);

    console.log(beneficiaryData);

    return (
        <Layout>
            <Container>
                <Header>
                    <h2>Gestão de beneficiados</h2>
                </Header>
                <ButtonContainer>
                    <Button className='button' disabled variant='contained' color='primary'>
                        Ativar beneficiário
                    </Button>
                    <Button className='button' disabled variant='contained' color='primary'>
                        Desativar beneficiário
                    </Button>
                    <NavLink to={'/beneficiary/create'} key={'Criar'}>
                        <Button className='button' variant='contained' color='primary'>
                            Adicionar Beneficiário
                        </Button>
                    </NavLink>
                </ButtonContainer>
                <TableContainer>
                    <Row rowType={'header'}/>
                    <Row rowType={'even'} />
                    <Row rowType={'odd'} />
                    <Row rowType={'even'} />
                    <Row rowType={'odd'} />
                </TableContainer>
            </Container>
        </Layout>
    );
};

export default Beneficiary;
