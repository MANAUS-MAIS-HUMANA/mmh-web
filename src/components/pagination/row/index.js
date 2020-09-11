import React from 'react';

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
                        <h4>Joãozinho Carlos Pedro Pedroso</h4>
                }
            </NameDiv>
            <StatusDiv>
                {
                    props.rowType === 'header' ?
                        <h3>Status</h3>
                    :
                        <h4>Ativo</h4>
                }
            </StatusDiv>
            <BasketDiv>
                {
                    props.rowType === 'header' ?
                        <h3>Cestas recebidas</h3>
                    :
                        <h4>5</h4>
                }
            </BasketDiv>
            <LastDonationDateDiv>
                {
                    props.rowType === 'header' ?
                        <h3>Último recebimento</h3>
                    :
                        <h4>05/09/2020</h4>
                }
            </LastDonationDateDiv>
            <TotalFamilyMembersDiv>
                {
                    props.rowType === 'header' ?
                        <h3>Membros na família</h3>
                    :
                        <h4>4</h4>
                }
            </TotalFamilyMembersDiv>
            <ActionDiv>
                {
                    props.rowType === 'header' ?
                        <h3>Ações</h3>
                    :
                        <h4>Detalhes</h4>
                }
            </ActionDiv>
        </Container>
    );
}

export default Row;
