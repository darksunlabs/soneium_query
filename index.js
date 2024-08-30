import axios from 'axios';
import * as cheerio from "cheerio";

const add = '0xD0dC8A261Ad1B75A92C5e502AE10c3Fde042b879'; 

//const add2 = 'core1zgdprlr3hz5hhke9ght8mq723a8wlnzqwd60hm';

//const nft = 'mc-core1zgdprlr3hz5hhke9ght8mq723a8wlnzqwd60hm';

async function fetch_bal(add){
    const url = 'https://explorer-testnet.soneium.org/api/v2/addresses/'.concat(add);
     try {
        const response = await axios.get(url);
     
         console.log(response.data.coin_balance);

    }
    catch (e){
        console.log(e);
    }
    
}


async function fetch_tx(add){
    const url = 'https://explorer-testnet.soneium.org/api/v2/addresses/'.concat(add).concat('/transactions?filter=to%20%7C%20from');
     try {
        const response = await axios.get(url);

         console.log(response.data);

    }
    catch (e){
        console.log(e);
    }

}

async function fetch_nft(add){
    const url = 'https://explorer-testnet.soneium.org/api/v2/addresses/'.concat(add).concat('/nft?type=ERC-721%2CERC-404%2CERC-1155');
    try {
        const response = await axios.get(url);

         console.log(response.data);

    }
    catch (e){
        console.log(e);
    }    

}



await fetch_bal(add);
await fetch_tx(add);
await fetch_nft(add);
