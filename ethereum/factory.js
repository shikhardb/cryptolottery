import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xB2825c389350e01B22ddA8d25c2Ef88515655D77'
);

export default instance;
