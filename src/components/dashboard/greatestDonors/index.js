import React, { useState, useEffect } from 'react';

import to from 'await-to-js';

import api from '../../../services/api';
import { Container, ImageDiv, CardContainer } from './styles';
import greatestDonorsImage from '../../../assets/greatest_donors.svg';
import RankingCard from './card';

const GreatestDonors = () => {

    const [shouldGetDonations, SetShouldGetDonations] = useState(true);
    const [donations, SetDonations] = useState([]);

    useEffect(() => {
        async function getDonations() {
            const [ error, response ] = await to(api.get('/doadores/ranking?limit=10'));

            if (error) {
                return [];
            }

            SetDonations(response.data.data.map(doador => {
                return { nome: doador.nome, valor: doador.total_cestas_basicas };
            }));
        }

        if (shouldGetDonations) {
            getDonations();
            SetShouldGetDonations(false);
        }
    }, [shouldGetDonations]);

    return (
        <Container>
            <ImageDiv>
                <img src={greatestDonorsImage} alt='Manaus Mais Humana' />
            </ImageDiv>
            <CardContainer>
            {
                donations ?
                    donations.map((donation, index) =>
                        <RankingCard
                            position={index + 1}
                            name={donation.nome}
                            value={donation.valor}
                        />
                    )
                : <></>
            }
            </CardContainer>
        </Container>
    );
};

export default GreatestDonors;
