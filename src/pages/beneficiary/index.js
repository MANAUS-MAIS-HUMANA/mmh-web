import React from 'react';
import Button from "@material-ui/core/Button";
import { NavLink } from 'react-router-dom';

import {
    Container,
    Header,
    ButtonContainer,
} from './styles';
import Layout from '../../components/layout'

const Beneficiary = () => {
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
            </Container>
        </Layout>
    );
};

export default Beneficiary;
