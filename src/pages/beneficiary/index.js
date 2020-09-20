import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform'
import { Input } from '@rocketseat/unform'
import Button from "@material-ui/core/Button";
import { NavLink } from 'react-router-dom';

import to from 'await-to-js';

import api from '../../services/api';
import {
    Container,
    Header,
    ActionContainer,
    ButtonContainer,
    TableContainer,
    FormContainer,
    ButtonDiv,
    PaginationContainer,
    PreviousDiv,
    CurrentPageDiv,
    NextDiv,
} from './styles';
import Layout from '../../components/layout';
import Row from '../../components/pagination/row'

const Beneficiary = () => {

    const perfis = localStorage.getItem('@mmh/perfis');
    const isAdminSession = perfis && !perfis.includes('parceiro');

    const [shouldGetBeneficiaryData, SetshouldGetBeneficiaryData] = useState(true);
    const [beneficiaryData, SetBeneficiaryData] = useState([]);
    const [page, SetPage] = useState(1);
    const [currentPage, SetCurrentPage] = useState(1);
    const [lastPage, SetLastPage] = useState(1);
    const [limit] = useState(10);
    const [searchValue, setSearchValue] = useState();

    const partnerId = !isAdminSession ? parseInt(localStorage.getItem('@mmh/partner_id')) : null;

    useEffect(() => {
        async function getBeneficiaryData() {
            let endpoint = `/beneficiarios/basico?page=${page}&limit=${limit}`;
            if (partnerId && !isNaN(partnerId)) {
                endpoint = endpoint + `&partner_id=${partnerId}`;
            }

            if (searchValue) {
                endpoint = endpoint + `&search=${searchValue}`;
            }

            const [ error, response ] = await to(api.get(endpoint));

            if (error) {
                return [];
            }

            SetBeneficiaryData(response.data.data);
            SetLastPage(response.data.last_page);
            SetCurrentPage(page);
        }

        if (shouldGetBeneficiaryData) {
            getBeneficiaryData();
            SetshouldGetBeneficiaryData(false);
        }
    }, [shouldGetBeneficiaryData, page, limit, lastPage, partnerId, searchValue]);

    const changePage = (event) => {
        SetCurrentPage(event.target.value);
    };

    const setNewPage = (data) => {
        let newPage = parseInt(data.currentPage);
        if (isNaN(newPage)) {
            newPage = 1;
        } else if (newPage > lastPage) {
            newPage = lastPage;
        } else if (newPage < 1) {
            newPage = 1;
        }

        if (page !== newPage) {
            SetPage(newPage);
            SetshouldGetBeneficiaryData(true);
        }
    };

    const setSearch = (data) => {
        setSearchValue(data.searchBox);
        SetPage(1);
        SetCurrentPage(1);
        SetshouldGetBeneficiaryData(true);
    }

    const resetSearch = (event) => {
        if (!event.target.value) {
            setSearchValue(null);
            SetPage(1);
            SetCurrentPage(1);
            SetshouldGetBeneficiaryData(true);
        }
    };

    const changeToFirstPage = () => {
        if (page !== 1) {
            SetPage(1);
            SetCurrentPage(1);
            SetshouldGetBeneficiaryData(true);
        }
    };

    const changeToLastPage = () => {
        if (page !== lastPage) {
            SetPage(lastPage);
            SetCurrentPage(lastPage);
            SetshouldGetBeneficiaryData(true);
        }
    };

    const changeToPreviousPage = () => {
        const newPage = page > 1 ? page - 1 : 1;
        SetPage(newPage);
        SetCurrentPage(newPage);
        SetshouldGetBeneficiaryData(true);
    };

    const changeToNextPage = () => {
        const newPage = page < lastPage ? page + 1 : lastPage;
        SetPage(newPage);
        SetCurrentPage(newPage);
        SetshouldGetBeneficiaryData(true);
    };

    return (
        <Layout>
            <Container>
                <Header>
                    <h2>Gestão de beneficiados</h2>
                </Header>
                <ActionContainer>
                    <FormContainer>
                        <Form onSubmit={setSearch}>
                            <Input
                                name={'searchBox'}
                                placeholder={'Busque por nome, email ou CPF e pressione ENTER'}
                                onChange={resetSearch}
                            />
                        </Form>
                    </FormContainer>
                    <ButtonContainer>
                        <ButtonDiv>
                            <Button className='button' disabled variant='contained' color='primary'>
                                Ativar beneficiário
                            </Button>
                        </ButtonDiv>
                        <ButtonDiv>
                            <Button className='button' disabled variant='contained' color='primary'>
                                Desativar beneficiário
                            </Button>
                        </ButtonDiv>
                        <NavLink to={'/beneficiary/create'} key={'Criar'}>
                            <Button className='button' variant='contained' color='primary'>
                                Adicionar Beneficiário
                            </Button>
                        </NavLink>
                    </ButtonContainer>
                </ActionContainer>
                <TableContainer>
                    <Row rowType={'header'}/>
                    {
                        beneficiaryData ?
                            beneficiaryData.map((beneficiary, index) =>
                                <Row
                                    rowType={(index % 2 ===  0) ? 'even' : 'odd'}
                                    beneficiaryId={beneficiary.id}
                                    name={beneficiary.nome}
                                    status={beneficiary.ativo === 1 ? 'Ativo': 'Inativo'}
                                    totalBasket={beneficiary.total_cestas
                                        ? beneficiary.total_cestas
                                        : '-'
                                    }
                                    lastDonation={beneficiary.data_doacao
                                        ? beneficiary.data_doacao
                                        : '-'
                                    }
                                    totalFamilyMembers={beneficiary.total_residentes}
                                />
                            )
                        : <></>
                    }
                </TableContainer>
                <PaginationContainer>
                    <Button onClick={changeToFirstPage}>{'<<'}</Button>
                    <PreviousDiv>
                        <Button onClick={changeToPreviousPage}>{'<'}</Button>
                    </PreviousDiv>
                    <CurrentPageDiv>
                        <Form onSubmit={setNewPage}>
                            <Input
                                name={'currentPage'}
                                maxlength={'7'}
                                value={currentPage}
                                onChange={changePage}
                            />
                        </Form>
                    </CurrentPageDiv>
                    <NextDiv>
                        <Button onClick={changeToNextPage}>{'>'}</Button>
                    </NextDiv>
                    <Button onClick={changeToLastPage}>{'>>'}</Button>
                </PaginationContainer>
            </Container>
        </Layout>
    );
};

export default Beneficiary;
