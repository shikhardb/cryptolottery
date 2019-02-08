import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x949f79724e2a2b98A18D28f3823419723Fd06C7c'
);

export default instance;
