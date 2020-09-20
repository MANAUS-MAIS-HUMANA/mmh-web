import React from 'react';
import { NavLink } from 'react-router-dom';

import Checkbox from "@material-ui/core/Checkbox";

import {
    Container,
    CheckBoxDiv,
    NameDiv,
    StatusDiv,
    BasketDiv,
    LastDonationDateDiv,
    TotalFamilyMembersDiv,
    ActionDiv,
} from './styles';

const Row = (props) => {

    const convertDate = (dateString) => {
        const d = new Date(dateString);
        const isValidDate = d instanceof Date && !isNaN(d);
        if (isValidDate) {
            const month = String(d.getMonth() + 1).padStart(2, '0');
            return `${d.getDate()}/${month}/${d.getFullYear()}`;
        }

        return '-';
    };

    return (
        <Container rowType={props.rowType}>
            <CheckBoxDiv>
                <Checkbox color={'primary'} />
            </CheckBoxDiv>
            <NameDiv>
                {
                    props.rowType === 'header' ?
                        <h3>Nome</h3>
                    :
                        <h4>{props.name}</h4>
                }
            </NameDiv>
            <StatusDiv>
                {
                    props.rowType === 'header' ?
                        <h3>Status</h3>
                    :
                        <h4>{props.status}</h4>
                }
            </StatusDiv>
            <BasketDiv>
                {
                    props.rowType === 'header' ?
                        <h3>Cestas recebidas</h3>
                    :
                        <h4>{props.totalBasket}</h4>
                }
            </BasketDiv>
            <LastDonationDateDiv>
                {
                    props.rowType === 'header' ?
                        <h3>Último recebimento</h3>
                    :
                        <h4>{convertDate(props.lastDonation)}</h4>
                }
            </LastDonationDateDiv>
            <TotalFamilyMembersDiv>
                {
                    props.rowType === 'header' ?
                        <h3>Membros na família</h3>
                    :
                        <h4>{props.totalFamilyMembers}</h4>
                }
            </TotalFamilyMembersDiv>
            <ActionDiv>
                {
                    props.rowType === 'header' ?
                        <h3>Ações</h3>
                        :
                        <NavLink
                        key={'AtualizarBeneficiario'}
                        to={{
                            pathname: '/beneficiary/create',
                            extra: { beneficiaryId: props.beneficiaryId }
                        }}
                    >
                        {/*<Button className='button' variant='contained' color='primary'>
                            Detalhes
                        </Button>*/}
                        <label>Detalhes</label>
                    </NavLink>
                }
            </ActionDiv>
        </Container>
    );
}

export default Row;
