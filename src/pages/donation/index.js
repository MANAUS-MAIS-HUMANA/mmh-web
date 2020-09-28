import React, { useState } from "react";
import { toast } from 'react-toastify';

import { Form } from '@rocketseat/unform'
import * as Yup from 'yup';

import { Container, Footer, Header, Line } from './styles';
import FormInput from '../../components/Input';
import Layout from '../../components/layout';
import Loading from '../../components/Loading';

import api from '../../services/api';

const Donation = (props) => {

    const [beneficiaryId] = useState(
        props.location.extra
            ? props.location.extra.beneficiaryId
            : localStorage.getItem('@mmh/DonationBenId')
    );
    const [partnerId] = useState(
        props.location.extra ? props.location.extra.partnerId : localStorage.getItem('@mmh/partId')
    );
    const [pageLoading, setPageLoading] = useState(false);

    const schema = Yup.object().shape({
        totalBaskets: Yup.string(),
        donationDeliveryDate: Yup.string().nullable()
            .matches(
                '^$|(((0[1-9])|([1-2][0-9])|(3[01]))/((0[1-9])|(1[012]))/20[2-9][0-9])',
                'Data inválida. Insira uma data a partir de 2020',
            ),
    });

    const mask = (i, type) => {
        let v = i.value;

        if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
			i.value = v.substring(0, v.length - 1);
			return;
		}

        if (type === 'date') {
            if (!v) {
                i.value = '';
                return;
            }
			i.setAttribute("maxlength", "10"); // Máximo de 08 caracteres

			if (v.length === 3) i.value = v.substring(0, 2) + '/' + v[2];
			if (v.length === 6) i.value = v.substring(0, 5) + '/' + v[5];
		}

        if (type === 'baskets') {
			i.setAttribute("maxlength", "3");
        }
    };

    const handleSubmit = data => {
        const { donationDeliveryDate, totalBaskets } = data;

        const body = {
            total_cestas: totalBaskets,
        };

        if (donationDeliveryDate) {
            const year = donationDeliveryDate.slice(-4);
            const month = donationDeliveryDate.slice(3,5);
            const day = donationDeliveryDate.slice(0,2);

            body['data_doacao'] = `${year}-${month}-${day}`;
        }

        postMessage(body);
	};

    const postMessage = async (body) => {
        setPageLoading(true);

        if (!partnerId || !beneficiaryId) {
            toast.error('Um erro inesperado ocorreu. Volte a página anterior e tente novamente');
        } else {
            const endpoint = `/parceiros/${partnerId}/beneficiarios/${beneficiaryId}/doacoes`;

            try {
                const response = await api.post(endpoint, {...body});

                if (response.data) {
                    toast.success(`Entrega de cesta cadastrada com sucesso`);
                } else {
                    toast.error('Erro ao cadastrar a entrega da cesta');
                }
            } catch (error) {
                toast.error('Erro ao cadastrar a entrega da cesta');
            }
        }

        setPageLoading(false);
    };

    return (
        <Layout>
            <Container>
                <Header>
                    <h2>Gestão de Cestas Entregues</h2>
                </Header>
                <Form schema={schema} onSubmit={handleSubmit} >
                    <Line>
                        <FormInput
                            label='Total de cestas entregues'
                            name='totalBaskets'
                            placeholder='ex. 2'
                            required
                            onChange={event => mask(event.target, 'baskets')}
                        />
                        <FormInput
                            label='Data da Entrega'
                            name='donationDeliveryDate'
                            placeholder='ex. DD/MM/AAAA'
                            onChange={event => mask(event.target, 'date')}
                        />
                    </Line>
                    <Footer>
						<button type='submit' disabled={pageLoading}>
							<p>Salvar</p> {pageLoading && <Loading />}
						</button>
					</Footer>
                </Form>
            </Container>
        </Layout>
    )
}

export default Donation;
