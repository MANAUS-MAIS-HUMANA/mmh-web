import React from 'react';

import trophyIcon from '../../../../assets/donor_trophy.svg';
import medalIcon from '../../../../assets/donor_medal.svg';

import { Container, IconContainer, DonorInfoContainer } from './styles';

const CardIcon = (props) => {
    const getIcon = (position) => {
        if (position === 1) {
            return <img src={trophyIcon} alt='Troféu de primeiro colocado' />;
        } else if (position === 2 || props.position === 3) {
            return <img src={medalIcon} alt='Troféu de primeiro colocado' />;
        }

        return <h1>{position}º</h1>;
    };

    return (
        <IconContainer position={props.position}>
            {getIcon(props.position)}
        </IconContainer>
    );
};

const DonorInfo = (props) => {
    return (
        <DonorInfoContainer position={props.position}>
            <h3>{props.name}</h3>
            Doou {props.value} cestas básicas
        </DonorInfoContainer>
    );
};

const RankingCard = (props) => {
    return (
        <Container>
            <CardIcon position={props.position} />
            <DonorInfo position={props.position} name={props.name} value={props.value} />
        </Container>
    );
};

export default RankingCard;
