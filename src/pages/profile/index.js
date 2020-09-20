import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform'
import Layout from '../../components/layout'
import { Container, Header, Line, Footer } from './styles';
import FormInput from '../../components/Input';
import FormSelect from '../../components/Select';
import * as Yup from 'yup';
import FormRadio from '../../components/Radio';
import FormCheck from '../../components/Check'
import Loading from '../../components/Loading'
import api from '../../services/api'
import { toast } from 'react-toastify'
import to from 'await-to-js'

const Profile = (props) => {
	// Variáveis de estado da página

	const perfis = localStorage.getItem('@mmh/perfis')
	const showParceiro = perfis && !perfis.includes('parceiro')

	const [married, setMarried] = useState(false)
	const [ownBusiness, setOwnBusiness] = useState(true)
	const [typeActivities, setTypeActivities] = useState(['Online', 'Presencial'])
	const [pageLoading, setPageLoading] = useState(false)
	const [partners, setPartners] = useState([])
	const [neighborhoods, setNeighborhoods] = useState([])
	const [beneficiaryId] = useState(
		props.location.extra ? props.location.extra.beneficiaryId : null
	)
	const [beneficiaryData, setBeneficiaryData] = useState(null)

	// Obtendo a lista de parceiros, caso o usuário logado não seja uma instituição parceira

	const parseTypeActivities = value => value ? value.split(',') : [];

	useEffect(() => {
		async function getNeighborhoods() {
		    const [ error, response ] = await to(api.get('/bairros'));

		    if (error) {
		        return [];
		    }

		    setNeighborhoods(response.data.data.map(bairro => {
				return { id: bairro.id.toString(), title: bairro.nome };
			}));
		}

		async function getParceiros() {
			if (!showParceiro) {
				setPartners([]);
				return;
			}

		    const [ error, response ] = await to(api.get('/parceiros/basico'));

		    if (error) {
		        return [];
		    }

		    setPartners(response.data.data.map(partner => {
				return { id: partner.id.toString(), title: partner.nome };
			}));
		}

		async function getBeneficiaryData() {
			if (!beneficiaryId) {
				return;
			}

		    const [ error, response ] = await to(api.get(`/beneficiarios/${beneficiaryId}`));

		    if (error) {
		        return;
		    }

		    setBeneficiaryData(response.data.data);
			setOwnBusiness(!!response.data.data.gostaria_montar_negocio);
			setTypeActivities(parseTypeActivities(response.data.data.tipo_curso))
		}

		getParceiros();
		getNeighborhoods();
		getBeneficiaryData();
	}, [showParceiro, beneficiaryId])

	// Objeto com os estados civis possíveis
	const marialStatus = [
		{ id: '1', title: 'Casado(a)' },
		{ id: '2', title: 'Divorciado(a)' },
		{ id: '3', title: 'Separado(a)' },
		{ id: '4', title: 'Solteiro(a)' },
		{ id: '5', title: 'União estável' },
		{ id: '6', title: 'Viúvo(a)' }
	]

	const getMaritalStatus = maritalStatus => {
		switch (maritalStatus) {
			case 'Casado':
				return '1';
			case 'Divorciado':
				return '2';
			case 'Separado':
				return '3';
			case 'Solteiro':
				return '4';
			case 'União Estável':
				return '5';
			case 'Viúvo':
				return '6';
			default:
				return null;
		}
	};

	// Situacões de moradia

	const houseStatus = [
		{ id: '1', title: 'Alugada' },
		{ id: '2', title: 'Cedido' },
		{ id: '3', title: 'Local de trabalho' },
		{ id: '4', title: 'Outros' },
		{ id: '5', title: 'Própria' },
		{ id: '6', title: 'Própria Financiada' },
	]

	const getHouseStatus = status => {
		switch (status) {
			case 'Alugada':
				return '1';
			case 'Cedido':
				return '2';
			case 'Local de trabalho':
				return '3';
			case 'Outros':
				return '4';
			case 'Própria':
				return '5';
			case 'Própria Financiada':
				return '6';
			default:
				return null;
		}
	};

	// Modalidade de ocupacão

	const jobObj = [
		{ id: '1', title: 'Aposentado' },
		{ id: '2', title: 'Beneficiário de auxílio doença' },
		{ id: '3', title: 'Bens alugados a terceiros' },
		{ id: '4', title: 'Desempregado' },
		{ id: '5', title: 'Pensão alimentícia' },
		{ id: '6', title: 'Pensionista' },
		{ id: '7', title: 'Proprietário ou participação em cotas de empresa' },
		{ id: '8', title: 'Trabalho autônomo ou no mercado informal' },
		{ id: '9', title: 'Trabalho no mercado formal' },
	]

	const getJobStatus = status => {
		switch (status) {
			case 'Aposentado':
				return '1';
			case 'Beneficiário de auxílio doença':
				return '2';
			case 'Bens Alugados a Terceiros':
				return '3';
			case 'Desempregado':
				return '4';
			case 'Pensão alimentícia':
				return '5';
			case 'Pensionista':
				return '6';
			case 'Proprietário ou participação em cotas de empresa':
				return '7';
			case 'Trabalho autônomo ou no mercado informal':
				return '8';
			case 'Trabalho no mercado formal':
				return '9';
			default:
				return null;
		}
	};

	// Pessoas na residência
	const peopleInHouse = [
		{ id: '1', title: '1' },
		{ id: '2', title: '2' },
		{ id: '3', title: '3' },
		{ id: '4', title: '4' },
		{ id: '5', title: '5' },
		{ id: '6', title: '6 ou mais' }
	]

	const getPeopleInHouse = totalPeople => {
		if (totalPeople === '6 ou mais') {
			return '6';
		}

		if (totalPeople) {
			return totalPeople;
		}

		return null;
	};

	// Cursos que o usuário tem interesse

	const courseStatus = [
		{ id: '1', title: 'Administração' },
		{ id: '2', title: 'Atendimento ao Cliente' },
		{ id: '3', title: 'Custos' },
		{ id: '4', title: 'Finanças' },
		{ id: '5', title: 'Informática' },
		{ id: '6', title: 'Não Tenho Interesse' },
		{ id: '7', title: 'Outro' },
		{ id: '8', title: 'Planejamento' },
		{ id: '9', title: 'Plano de Negócio' },
		{ id: '10', title: 'Preço de venda' },
		{ id: '11', title: 'Saúde e Beleza' },
		{ id: '12', title: 'Vendas' },
	]

	// Schema de validacão dos dados
	const schema = Yup.object().shape({
		partner_id: Yup.string().default(''),
		name: Yup.string().required('O nome é obrigatório'),
		email: Yup.string()
			.email('Insira um e-mail válido')
			.required('O e-mail é obrigatório'),
		cpf: Yup.string()
			.required('O CPF é obrigatório')
			.min(14, 'Insira o CPF completo'),
		mobile: Yup.string()
			.required('O número de celular é obrigatório')
			.min(15, 'Insira o número no formato correto'),
		birth: Yup.string()
			.required('A data de nascimento é obrigatória')
			.min(10, 'Insira a data corretamente'),
		marial: Yup.string().required('O estado civil é obrigatório'),
		partner_name: married === '1' ? Yup.string()
			.required('O nome do cônjuge é obrigatório') :
			Yup.string(),
		partner_cpf: married === '1' ? Yup.string()
			.required('O CPF do cônjuge é obrigatório')
			.min(14, 'Insira o CPF completo') :
			Yup.string(),
		course: Yup.string().required('É obrigatório selecionar uma opção de cursos'),
		address: Yup.string()
			.required('O endereço é obrigatório'),
		neighborhood: Yup.string()
			.required('O bairro é obrigatório'),
		coliving: Yup.string(),
		house_status: Yup.string(),
		job: Yup.string(),
		income: Yup.string(),
	});

	const formatCPF = cpf => {
		if (!cpf) {
			return null;
		}

		if (cpf.length > 11) {
			return cpf;
		}

		const missing = 11 - cpf.length;
		const missingZeros = '0'.repeat(missing);
		const n = missingZeros + cpf;

		return `${n[0]}${n[1]}${n[2]}.${n[3]}${n[4]}${n[5]}.${n[6]}${n[7]}${n[8]}-${n[9]}${n[10]}`;
	};

	const formatPhone = phone => {
		if (!phone) {
			return null;
		}

		if (phone.length !== 11) {
			return phone;
		}
		const p = phone;

		return `(${p[0]}${p[1]}) ${p[2]}${p[3]}${p[4]}${p[5]}${p[6]}-${p[7]}${p[8]}${p[9]}${p[10]}`;
	};

	const formatDataNascimento = dataNascimento => {
		if (!dataNascimento) {
			return null;
		}

		if (dataNascimento.length !== 10) {
			return dataNascimento;
		}

		const d = dataNascimento;
		return `${d[8]}${d[9]}/${d[5]}${d[6]}/${d[0]}${d[1]}${d[2]}${d[3]}`;
	}

	const formatMonthlyIncome = monthlyIncome => {
		if (!monthlyIncome) {
			return null;
		}

		return `R$ ${monthlyIncome.split('.')[0]}`;
	};


	// Máscara para campos com formatos específicos
	function mask(i, type) {
		var v = i.value;

		if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
			i.value = v.substring(0, v.length - 1);
			return;
		}

		if (type === 'cpf') {
			i.setAttribute("maxlength", "14"); // Máximo de 14 caracteres
			if (v.length === 3 || v.length === 7) i.value += ".";
			if (v.length === 11) i.value += "-";
		}

		if (type === 'date') {
			i.setAttribute("maxlength", "10"); // Máximo de 08 caracteres
			if (v.length === 2) i.value += '/';
			if (v.length === 5) i.value += "/";
		}

		if (type === 'mobile') {
			i.setAttribute("maxlength", "15"); // Máximo de 15 caracteres
			if (v.length === 1) i.value = '(' + v;
			if (v.length === 3) i.value += ") ";
			if (v.length === 10) i.value += "-";
		}

		if (type === 'money') {
			i.setAttribute("maxlength", "12"); // Máximo de 15 caracteres
			if (v.length === 1) i.value = 'R$ ' + v;
			if (v === 'R$ ') i.value = '';
		}
	}

	// Funcão de submit do form e criacão do objeto de body para a requisicão.
	function handleSubmit(data) {
		const {
			partner_id, income, job, house_status, coliving, neighborhood, address, partner_cpf,
			partner_name, marial, birth, mobile, cpf, email, name, course
		} = data

		const localStoragePartnerId = localStorage.getItem('@mmh/partner_id')
		const partnerId = (partner_id === '') ? localStoragePartnerId : partner_id
		const wantParticipateCourses = courseStatus[course - 1].title !== 'Não Tenho Interesse'
		const incomeWithoutDecimalPart = income.split('.')[0].replace(/\D/g, '');

		const body = {
			parceiro_id: parseInt(partnerId),
			nome: name,
			cpf,
			email,
			data_nascimento: `${birth.slice(-4)}-${birth.slice(3,5)}-${birth.slice(0,2)}`,
			trabalho: job ? jobObj[job-1].title : null,
			esta_desempregado: job ? jobObj[job-1].title === 'Desempregado' : null,
			estado_civil_id: parseInt(marial),
			nome_conjuge: partner_name || ``,
			cpf_conjuge: partner_cpf || ``,
			total_residentes: coliving,
			situacao_moradia: houseStatus[house_status-1]?.title || ``,
			renda_mensal: parseInt(incomeWithoutDecimalPart),
			gostaria_montar_negocio: ownBusiness,
			gostaria_participar_cursos: wantParticipateCourses,
			curso_id: parseInt(course),
			tipo_curso: typeActivities.join(','),
			concorda_informacoes_verdadeiras: true,
			telefones: [
				{
					telefone: parseInt(mobile.replace(/\D/g, '')),
					tipo: "Celular"
				}
			],
			enderecos: [
				{
					endereco: address,
					bairro_id: neighborhood,
					zona_id: null,
					cidade_id: 1
				}

			]
		}

		if (!beneficiaryId) {
			handlePostBenefited(body);
		} else {
			handlePutBenefited(body, beneficiaryId);
		}
	}

	// Envio de dados para a API
	async function handlePostBenefited (body) {

		setPageLoading(true)

		try {
			const response = await api.post('/beneficiarios', {...body})

			if(response.data) {
				toast.success(`Beneficiário cadastrado com sucesso`)
			} else {
				toast.error(`Erro ao cadastrar o beneficiário`)
			}


		} catch(error) {

			toast.error(`Erro ao cadastrar o beneficiário`)
			error.response && error.response.data && error.response.data.errors.map(error => toast.error(error))

		}

		setPageLoading(false)
	}

	async function handlePutBenefited (body, beneficiaryId) {
		setPageLoading(true);

		try {
			const response = await api.put(`/beneficiarios/${beneficiaryId}`, {...body});

			if(response.data) {
				toast.success(`Beneficiário atualizado com sucesso`);
			} else {
				toast.error(`Erro ao atualizar os dados do beneficiário`);
			}
		} catch(error) {
			toast.error(`Erro ao cadastrar o beneficiário`);
			error.response && error.response.data && error.response.data.errors.map(
				error => toast.error(error)
			);
		}

		setPageLoading(false);
	}

	// Início do componente.

	return (
		<Layout>
			<Container>
				<Header>
					{
						beneficiaryId
							? <h2>Atualização de Beneficiário</h2>
							: <h2>Cadastro de Beneficiários</h2>
					}
				</Header>
				<Form schema={schema} onSubmit={handleSubmit} >
					<Line>
					{
						showParceiro ?
							<FormSelect
								label='Parceiro'
								name='partner_id'
								value={beneficiaryData ? beneficiaryData.parceiro_id : null}
								options={partners}
								required
							/>
						:
							<></>
					}
					</Line>
					<Line>
						<FormInput
							label='Nome'
							name='name'
							placeholder='ex. João Pedro'
							value={beneficiaryData ? beneficiaryData.nome : null}
							required
						/>
						<FormInput
							label='Email'
							name='email'
							placeholder='ex. example@example.com'
							value={beneficiaryData ? beneficiaryData.email : null}
							required
						/>
					</Line>
					<Line>
						<div className='halfgrid'>
							<FormInput
								label='CPF'
								name='cpf'
								placeholder='ex. 000.000.000-10'
								value={beneficiaryData ? formatCPF(beneficiaryData.cpf) : null}
								required
								onChange={event => mask(event.target, 'cpf')}
							/>
							<FormInput
								label='Celular'
								name='mobile'
								placeholder='ex. (92) 99999-9999'
								value={beneficiaryData
									? formatPhone(beneficiaryData.telefones[0].telefone)
									: null
								}
								required
								onChange={event => mask(event.target, 'mobile')}
							/>
						</div>
						<div className='halfgrid'>
							<FormInput
								label='Data de Nascimento'
								name='birth'
								placeholder='ex. dd/mm/aaaa'
								value={beneficiaryData
									? formatDataNascimento(beneficiaryData.data_nascimento)
									: null
								}
								required
								onChange={event => mask(event.target, 'date')}
							/>
							<FormSelect
								label='Estado Civil'
								name='marial'
								options={marialStatus}
								value={beneficiaryData
									? getMaritalStatus(beneficiaryData.estado_civil.nome)
									: null
								}
								onChange={event => setMarried(event.target.value)}
								required
							/>
						</div>
					</Line>
					{
						married === '1' || (beneficiaryData &&
								getMaritalStatus(beneficiaryData.estado_civil.nome) === '1') ?
							<Line>
								<FormInput
									label='Nome do cônjuge'
									name='partner_name'
									value={beneficiaryData ? beneficiaryData.nome_conjuge : null}
									placeholder='ex. João Pedro'
									required
								/>
								<FormInput
									label='CPF do Cônjuge'
									name='partner_cpf'
									placeholder='ex. 000.000.000-10'
									value={beneficiaryData
										? formatCPF(beneficiaryData.cpf_conjuge)
										: null
									}
									required
									onChange={event => mask(event.target, 'cpf')}
								/>
							</Line>
							:
							<></>
					}
					<Line>
						<FormInput
							label='Endereço Completo'
							name='address'
							placeholder='Informe a rua, número, complemento (se houver) e CEP'
							value={beneficiaryData
								? beneficiaryData.enderecos[0].endereco
								: null
							}
							required />
						<FormSelect
							label='Bairro'
							name='neighborhood'
							options={neighborhoods}
							value={beneficiaryData
								? beneficiaryData.enderecos[0].bairro.id
								: null
							}
							required
						/>
					</Line>
					<Line>
						<div className='halfgrid'>
							<FormSelect
								label='Pessoas em sua residência'
								name='coliving'
								value={beneficiaryData
									? getPeopleInHouse(beneficiaryData.total_residentes)
									: null
								}
								options={peopleInHouse}
							/>
							<FormSelect
								label='Situação de moradia'
								name='house_status'
								value={beneficiaryData
									? getHouseStatus(beneficiaryData.situacao_moradia)
									: null
								}
								options={houseStatus}
							/>
						</div>
						<FormSelect
							label='Trabalho'
							name='job'
							value={beneficiaryData
								? getJobStatus(beneficiaryData.trabalho)
								: null
							}
							options={jobObj}
						/>
					</Line>
					<Line>
						<div className='halfgrid'>
							<FormInput
								label='Renda Mensal'
								name='income'
								placeholder='ex. R$ 1000'
								value={beneficiaryData
									? formatMonthlyIncome(beneficiaryData.renda_mensal)
									: null
								}
								onChange={event => mask(event.target, 'money')}
							/>
							<FormRadio
								label='Gostaria de montar um negócio?'
								options={['Sim', 'Não']}
								required value={ownBusiness}
								onChange={(status) => setOwnBusiness(status)}
							/>
						</div>
						<div className='halfgrid'>
							<FormSelect
								label='Tem interesse em participar de cursos, palestras e oficinas?'
								name='course'
								options={courseStatus}
								value={beneficiaryData
									? beneficiaryData.curso_id
									: null
								}
								required
							/>
							<FormCheck
								label='Quais tipos de cursos?'
								options={['Online', 'Presencial']}
								required
								value={typeActivities}
								onChange={(option, value) => {
									const elements = value.filter(element => element !== option)
									value.includes(option) ? setTypeActivities([...elements]) : setTypeActivities([...value, option])
								}}
							/>
						</div>
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

export default Profile;
