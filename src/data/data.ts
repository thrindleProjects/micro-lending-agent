import { Market } from '@/types';

export const IDType = [
  {
    name: "Driver's License",
    value: "Driver's License",
  },
  {
    name: 'NIN',
    value: 'NIN',
  },
  {
    name: 'International Passport',
    value: 'International Passport',
  },
];

export const groupMembers = [
  {
    id: 1,
    name: 'Makinde Johnson',
    status: '-',
  },
  {
    id: 2,
    name: ' Adelwale Phillips',
    status: '-',
  },
  {
    id: 3,
    name: 'Olalekan Alao',
    status: '-',
  },
];

export const groupsList = [
  {
    _id: 1,
    name: 'Alpha',
    group_id: '145436TRD',
    members: 0,
  },
  {
    _id: 2,
    name: 'Beta',
    group_id: '145436TRD',
    members: 1,
  },
  {
    _id: 3,
    name: 'Tetha',
    group_id: '145436TRD',
    members: 2,
  },
  {
    _id: 4,
    name: 'Meta',
    group_id: '145436TRD',
    members: 3,
  },
];

export const registerSteps = [
  'Personal',
  'Contact',
  'Business',
  'Bank',
  'Uploads',
];

export const gender = [
  {
    name: 'FEMALE',
    value: 'FEMALE',
  },
  {
    name: 'MALE',
    value: 'MALE',
  },
];

export const title = [
  { name: 'MR', value: 'MR' },
  { name: 'MRS', value: 'MRS' },
];

export const shopType = ['Lock up Shop', 'Stall', 'Umbrella', 'Mobile'];

export const lengthOfStayData = [
  {
    name: ' < 1',
    value: '<1',
  },
  {
    name: ' 2',
    value: '2',
  },
  {
    name: ' 3',
    value: '3',
  },
  {
    name: ' 4',
    value: '4',
  },
  {
    name: ' 5',
    value: '5',
  },
  {
    name: ' 6',
    value: '6',
  },
  {
    name: ' 7',
    value: '7',
  },
  {
    name: ' 8',
    value: '8',
  },
  {
    name: ' 9',
    value: '9',
  },
  {
    name: ' 10',
    value: '10',
  },
];

export const mainBanks = [
  {
    name: 'Select an option',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090140',
    bankCode: '140',
    name: 'Sagamu Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090148',
    bankCode: '989',
    name: 'Bowen Microfinance Bank',
  },
  {
    category: 'OTHER_FINANCIAL_INSTITUTIONS',
    code: '110002',
    bankCode: '987',
    name: 'Flutterwave Technology Solutions Limited',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090143',
    bankCode: '986',
    name: 'Apeks Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090141',
    bankCode: '985',
    name: 'Chikum Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090144',
    bankCode: '984',
    name: 'CIT Microfinance Bank',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '070014',
    bankCode: '983',
    name: 'First Generation Mortgage Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090147',
    bankCode: '982',
    name: 'Hackman Microfinance Bank',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '070016',
    bankCode: '981',
    name: 'Infinity Trust Mortgage Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090149',
    bankCode: '980',
    name: 'IRL Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090151',
    bankCode: '979',
    name: 'Mutual Trust Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090170',
    bankCode: '588',
    name: 'Rahama Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090193',
    bankCode: '597',
    name: 'Unical Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090152',
    bankCode: '598',
    name: 'Nagarta Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090268',
    bankCode: '618',
    name: 'ADEYEMI COLLEGE STAFF MICROFINANCE BANK',
  },
  {
    category: '12',
    code: '110001',
    bankCode: '329',
    name: 'PayAttitude Online',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100023',
    bankCode: '328',
    name: 'TagPay',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '070001',
    bankCode: '552',
    name: 'NPF MicroFinance Bank',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '070009',
    bankCode: '570',
    name: 'Gateway Mortgage Bank',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '070011',
    bankCode: '575',
    name: 'Refuge Mortgage Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090179',
    bankCode: '590',
    name: 'Fast Microfinance Bank ',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '070013',
    bankCode: '603',
    name: 'Platinum Mortgage Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090156',
    bankCode: '998',
    name: 'e-BARCS MICROFINANCE BANK ',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090176',
    bankCode: '600',
    name: 'Bosak Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090119',
    bankCode: '116',
    name: 'Ohafia Microfinance Bank',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '090120',
    bankCode: '117',
    name: 'Wetland Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090174',
    bankCode: '586',
    name: 'Malachy Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090259',
    bankCode: '608',
    name: 'Alekun Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090198',
    bankCode: '599',
    name: 'Renmoney Microfinance Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000022',
    bankCode: '100',
    name: 'SunTrust Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090118',
    bankCode: '244',
    name: 'Ibile Microfinance Bank',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '090117',
    bankCode: '581',
    name: 'Boctrust Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090130',
    bankCode: '573',
    name: 'Consumer Microfinance Bank',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100032',
    bankCode: '997',
    name: 'NOW NOW DIGITAL SYSTEMS LIMITED',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090164',
    bankCode: '974',
    name: 'First Royal Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090165',
    bankCode: '973',
    name: 'Petra Microfinance Bank',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100031',
    bankCode: '312',
    name: 'FCMB Easy Account',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090192',
    bankCode: '596',
    name: 'Midland Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090262',
    bankCode: '609',
    name: 'Stellas Microfinance Bank ',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090133',
    bankCode: '572',
    name: 'Al-Barakah Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090135',
    bankCode: '576',
    name: 'Personal Trust Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090139',
    bankCode: '578',
    name: 'Visa Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090138',
    bankCode: '579',
    name: 'Royal Exchange Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090134',
    bankCode: '602',
    name: 'Accion Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090145',
    bankCode: '907',
    name: 'Fullrange Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090267',
    bankCode: '611',
    name: 'Kuda Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090006',
    bankCode: '403',
    name: 'SafeTrust Mortgage Bank',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100022',
    bankCode: '326',
    name: 'GoMoney',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090114',
    bankCode: '114',
    name: 'EMPIRE MFB',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090126',
    bankCode: '568',
    name: 'Fidifund Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090123',
    bankCode: '569',
    name: 'Verite Microfinance Bank',
  },
  {
    category: 'MERCHANT_BANK',
    code: '060002',
    bankCode: '911',
    name: 'FBNQUEST MERCHANT BANK',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '090108',
    bankCode: '561',
    name: 'New Prudential Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090121',
    bankCode: '574',
    name: 'Hasal Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090112',
    bankCode: '580',
    name: 'Seed Capital Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090177',
    bankCode: '591',
    name: 'Lapo Microfinance Bank ',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090191',
    bankCode: '595',
    name: 'KCMB Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090189',
    bankCode: '592',
    name: 'Esan Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090188',
    bankCode: '593',
    name: 'Baines Credit Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090265',
    bankCode: '616',
    name: 'Lovonus Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090269',
    bankCode: '617',
    name: 'Greenville Microfinance Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000020',
    bankCode: '030',
    name: 'Heritage',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000021',
    bankCode: '068',
    name: 'Standard Chartered Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '070002',
    bankCode: '501',
    name: 'Fortis Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '070006',
    bankCode: '551',
    name: 'Covenant Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090001',
    bankCode: '401',
    name: 'ASO Savings & Loans',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090003',
    bankCode: '402',
    name: 'Jubilee Life Mortgage Bank',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100003',
    bankCode: '311',
    name: 'ReadyCash (Parkway)',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100004',
    bankCode: '305',
    name: 'OPAY',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100005',
    bankCode: '317',
    name: 'Cellulant',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100006',
    bankCode: '306',
    name: 'eTranzact',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100007',
    bankCode: '304',
    name: 'Stanbic IBTC @ease wallet',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100008',
    bankCode: '307',
    name: 'Ecobank Xpress Account',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100009',
    bankCode: '315',
    name: 'GTMobile',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100010',
    bankCode: '319',
    name: 'TeasyMobile',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100011',
    bankCode: '313',
    name: 'Mkudi',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100013',
    bankCode: '323',
    name: 'Access Money',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100017',
    bankCode: '324',
    name: 'Hedonmark',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100020',
    bankCode: '325',
    name: 'MoneyBox',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100021',
    bankCode: '302',
    name: 'Eartholeum',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000007',
    bankCode: '070',
    name: 'Fidelity Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000008',
    bankCode: '076',
    name: 'Polaris Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000009',
    bankCode: '023',
    name: 'CitiBank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000010',
    bankCode: '050',
    name: 'Ecobank Plc',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000011',
    bankCode: '215',
    name: 'Unity Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000015',
    bankCode: '057',
    name: 'Zenith Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000016',
    bankCode: '011',
    name: 'First Bank of Nigeria',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000017',
    bankCode: '035',
    name: 'Wema Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000018',
    bankCode: '032',
    name: 'Union Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000019',
    bankCode: '084',
    name: 'Enterprise Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090004',
    bankCode: '526',
    name: 'Parralex',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090005',
    bankCode: '523',
    name: 'Trustbond',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100001',
    bankCode: '314',
    name: 'FET',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100002',
    bankCode: '327',
    name: 'Pagatech',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100012',
    bankCode: '320',
    name: 'VTNetworks',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '100014',
    bankCode: '309',
    name: 'Firstmonie Wallet',
  },
  {
    category: 'DISCOUNT_HOUSES',
    code: '400001',
    bankCode: '908',
    name: 'FSDH',
  },
  {
    category: 'OTHER_FINANCIAL_INSTITUTIONS',
    code: '999999',
    bankCode: '999',
    name: 'NIP Virtual Bank',
  },
  {
    category: 'MERCHANT_BANK',
    code: '060001',
    bankCode: '559',
    name: 'Coronation Merchant Bank',
  },
  {
    category: 'BUREAUX_DE_CHANGE',
    code: '000014',
    bankCode: '044',
    name: 'Access Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000001',
    bankCode: '232',
    name: 'Sterling Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000002',
    bankCode: '082',
    name: 'Keystone Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000003',
    bankCode: '214',
    name: 'FCMB',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000004',
    bankCode: '033',
    name: 'United Bank for Africa',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000006',
    bankCode: '301',
    name: 'JAIZ Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000012',
    bankCode: '221',
    name: 'Stanbic IBTC Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000013',
    bankCode: '058',
    name: 'GTBank Plc',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100015',
    bankCode: '303',
    name: 'ChamsMobile',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100016',
    bankCode: '308',
    name: 'FortisMobile',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100018',
    bankCode: '322',
    name: 'ZenithMobile',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100019',
    bankCode: '318',
    name: 'Fidelity Mobile',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '070008',
    bankCode: '560',
    name: 'Page MFBank',
  },
  {
    category: 'MERCHANT_BANK',
    code: '000024',
    bankCode: '502',
    name: 'Rand Merchant Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090160',
    bankCode: '975',
    name: 'ADDOSSER MICROFINANCE BANK',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000023',
    bankCode: '101',
    name: 'Providus Bank',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '999033',
    bankCode: '182',
    name: 'NIP NEWBANK TSQ',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090180',
    bankCode: '589',
    name: 'Amju Unique Microfinance Bank ',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090159',
    bankCode: '996',
    name: 'CREDIT AFRIQUE MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090153',
    bankCode: '976',
    name: 'FFS Microfinance',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090172',
    bankCode: '601',
    name: 'Astrapolaris Microfinance Bank ',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100028',
    bankCode: '028',
    name: 'AG MORTGAGE BANK PLC',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '070017',
    bankCode: '024',
    name: 'Haggai Mortgage Bank Limited',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090261',
    bankCode: '610',
    name: 'Quickfund Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '100024',
    bankCode: '415',
    name: 'Imperial Homes Mortgage Bank',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100027',
    bankCode: '330',
    name: 'miMONEY',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090175',
    bankCode: '587',
    name: 'Rubies MFB',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090195',
    bankCode: '619',
    name: 'GROOMING MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090273',
    bankCode: '620',
    name: 'EMERALDS MICROFINANCE BANK ',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090276',
    bankCode: '621',
    name: 'TRUSTFUND MICROFINANCE BANK ',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100029',
    bankCode: '029',
    name: 'Innovectives Kesh',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100025',
    bankCode: '025',
    name: 'Zinternet – KongaPay',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090115',
    bankCode: '115',
    name: 'TCF MICROFINANCE BANK',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '070012',
    bankCode: '026',
    name: 'Lagos Building Investment Company',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090097',
    bankCode: '992',
    name: 'Ekondo MFB',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090111',
    bankCode: '031',
    name: 'FinaTrust Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090116',
    bankCode: '993',
    name: 'AMML MFB',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090122',
    bankCode: '991',
    name: 'Gowans Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090124',
    bankCode: '034',
    name: 'Xslnce Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090125',
    bankCode: '995',
    name: 'Regent Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090127',
    bankCode: '037',
    name: 'BC Kash Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090128',
    bankCode: '038',
    name: 'Ndiorah Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090129',
    bankCode: '039',
    name: 'Money Trust Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090131',
    bankCode: '040',
    name: 'Allworkers Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090132',
    bankCode: '041',
    name: 'Richway Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090137',
    bankCode: '042',
    name: 'PecanTrust Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090142',
    bankCode: '043',
    name: 'Yes Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090154',
    bankCode: '404',
    name: 'CEMCS Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090155',
    bankCode: '594',
    name: 'La Fayette Microfinance Bank',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '070015',
    bankCode: '615',
    name: 'Brent Mortgage Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090205',
    bankCode: '622',
    name: 'New Dawn Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090258',
    bankCode: '623',
    name: 'Imo State Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090190',
    bankCode: '624',
    name: 'Mutual Benefits Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090162',
    bankCode: '582',
    name: 'Stanford Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090167',
    bankCode: '583',
    name: 'Daylight Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090178',
    bankCode: '604',
    name: 'GREENBANK MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '070007',
    bankCode: '990',
    name: 'LIVINGTRUST MORTGAGE BANK',
  },
  {
    category: 'MERCHANT_BANK',
    code: '060003',
    bankCode: '637',
    name: 'Nova Merchant Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090173',
    bankCode: '585',
    name: 'Reliance Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090264',
    bankCode: '612',
    name: 'Auchi Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090270',
    bankCode: '613',
    name: 'AB MICROFINANCE BANK ',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090263',
    bankCode: '614',
    name: 'NIGERIAN NAVY MICROFINANCE BANK ',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090107',
    bankCode: '413',
    name: 'FBN MORTGAGES',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '070010',
    bankCode: '567',
    name: 'Abbey Mortgage Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090110',
    bankCode: '566',
    name: 'VFD MFB',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '100026',
    bankCode: '565',
    name: 'One Finance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090169',
    bankCode: '584',
    name: 'Alpha Kapital Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090251',
    bankCode: '607',
    name: 'UNIVERSITY OF NIGERIA',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090136',
    bankCode: '577',
    name: 'Baobab Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090146',
    bankCode: '978',
    name: 'Trident Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090194',
    bankCode: '605',
    name: 'NIRSAL MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090197',
    bankCode: '606',
    name: 'ABU MICROFINANCE BANK',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100052',
    bankCode: '052',
    name: 'BETA/ACCESS YELLO',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000027',
    bankCode: '103',
    name: 'Globus Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000025',
    bankCode: '102',
    name: 'Titan Trust Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090286',
    bankCode: '639',
    name: 'SAFE HAVEN MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090272',
    bankCode: '629',
    name: 'Olabisi Onabanjo University Microfinance Bank',
  },
  {
    category: 'COMMERCIAL_BANK',
    code: '000026',
    bankCode: '626',
    name: 'Taj Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090295',
    bankCode: '630',
    name: 'Omiye Microfinance Bank',
  },
  // {
  //   category: 'MICRO_FINANCE_BANK',
  //   code: '090172',
  //   bankCode: '631',
  //   name: 'Astrapolaris Microfinance Bank ',
  // },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090297',
    bankCode: '642',
    name: 'Alert Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090289',
    bankCode: '638',
    name: 'Pillar Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090271',
    bankCode: '628',
    name: 'Lavender Microfinance Bank',
  },
  {
    category: 'OTHER_FINANCIAL_INSTITUTIONS',
    code: '110006',
    bankCode: '641',
    name: 'Paystack Payment Limited',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090310',
    bankCode: '645',
    name: 'EdFin Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090304',
    bankCode: '648',
    name: 'EVANGEL MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090327',
    bankCode: '649',
    name: 'TRUST MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090328',
    bankCode: '651',
    name: 'EYOWO MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090332',
    bankCode: '652',
    name: 'EVERGREEN MICROFINANCE BANK',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '070019',
    bankCode: '416',
    name: 'Mayfresh Mortgage Bank Ltd',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090279',
    bankCode: '662',
    name: 'IKIRE MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090329',
    bankCode: '653',
    name: 'NEPTUNE MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090374',
    bankCode: '667',
    name: 'COASTLINE MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090303',
    bankCode: '668',
    name: 'PURPLEMONEY MFB',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090275',
    bankCode: '669',
    name: 'MERIDIAN MFB',
  },
  {
    category: '12',
    code: '120002',
    bankCode: '336',
    name: 'Hope Payment Service Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090393',
    bankCode: '335',
    name: 'Bridgeway Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090401',
    bankCode: '670',
    name: 'Shepherd Trust Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090400',
    bankCode: '672',
    name: 'FINCA MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090376',
    bankCode: '675',
    name: 'Apple Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090366',
    bankCode: '676',
    name: 'FIRMUS Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090373',
    bankCode: '677',
    name: 'Think Finance MFB',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090308',
    bankCode: '640',
    name: 'Brightway Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090333',
    bankCode: '650',
    name: 'OCHE Microfinance Bank',
  },
  {
    category: '12',
    code: '120001',
    bankCode: '332',
    name: '9 PAYMENT SERVICE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090281',
    bankCode: '643',
    name: 'MINT-FINEX MFB',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090380',
    bankCode: '333',
    name: 'CONPRO MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090405',
    bankCode: '671',
    name: 'ROLEZ MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090113',
    bankCode: '674',
    name: 'Microvis MFB',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090391',
    bankCode: '678',
    name: 'DAVODANI MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090389',
    bankCode: '681',
    name: 'EK-Reliable Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090166',
    bankCode: '679',
    name: 'Eso-E Microfinance Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090399',
    bankCode: '680',
    name: 'NWANNEGADI MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090371',
    bankCode: '682',
    name: 'AGOSASA MICROFINANCE BANK',
  },
  {
    category: 'MOBILE_MONEY_OPERATOR',
    code: '100035',
    bankCode: '683',
    name: 'M36',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090412',
    bankCode: '692',
    name: 'PREEMINENT MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090424',
    bankCode: '696',
    name: 'ABUCOOP MICROFINANCE BANK',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '070009',
    bankCode: '570',
    name: 'Gateway Mortgage Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090325',
    bankCode: '644',
    name: 'SPARKLE',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090326',
    bankCode: '647',
    name: 'BALOGUN GAMBARI MFB',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090299',
    bankCode: '658',
    name: 'KONTAGORA MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090318',
    bankCode: '665',
    name: 'FEDERAL UNIVERSITY DUTSE MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090321',
    bankCode: '656',
    name: 'MAYFAIR MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090322',
    bankCode: '657',
    name: 'REPHIDIM MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090324',
    bankCode: '655',
    name: 'IKENNE MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090331',
    bankCode: '654',
    name: 'UNAAB MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090336',
    bankCode: '661',
    name: 'BIPC MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090360',
    bankCode: '659',
    name: 'CASHCONNECT MFB',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090362',
    bankCode: '663',
    name: 'MOLUSI MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090364',
    bankCode: '660',
    name: 'NUTURE MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090372',
    bankCode: '664',
    name: 'LEGEND MICROFINANCE BANK',
  },
  {
    category: 'OTHER_FINANCIAL_INSTITUTIONS',
    code: '110005',
    bankCode: '666',
    name: '3LINE CARD MANAGEMENT LIMITED',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090365',
    bankCode: '673',
    name: 'CORESTEP MICROFINANCE BANK',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090370',
    bankCode: '334',
    name: 'ILISAN MICROFINANCE BANK',
  },
  {
    category: 'PRIMARY_MORTGAGE_BANK',
    code: '070021',
    bankCode: '693',
    name: 'Coop Mortgage Bank',
  },
  {
    category: 'MICRO_FINANCE_BANK',
    code: '090416',
    bankCode: '694',
    name: 'Chibueze MFB',
  },
];

export const staticMarkets: Market[] = [
  {
    market: 'Unnamed Market',
    _id: '0008a3ce-dc01-40c2-85f4-54bfdd6eb919',
  },
];
