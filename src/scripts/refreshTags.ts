import axios from 'axios';
import Tags from "../data/Tags.json"


export async function refreshTags(storeId: String): Promise<void> {
    console.log(Tags.Tags);

    const body = {
        "itemIds": [""],
        "labelIds": Tags.Tags
    };

    try {
        const response = await axios.post(`https://api-eu.vusion.io/vlink-pro/v1/stores/${storeId}/labels/displays/refresh`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': 'd5baf675ed8b4d529ac7476ba39abb1f'
            }
        });
        console.log(`Status: ${response.status} | Msg: ${response.statusText}`);
    } catch (error) {
        console.error(error);
    }
}