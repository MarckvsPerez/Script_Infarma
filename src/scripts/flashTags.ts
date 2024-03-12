import axios from 'axios';
import Tags from "../data/Tags.json"

export async function flashTags(storeId: String): Promise<void> {
    const body = []
    const colors = ["BLUE","WHITE"]

    for (let index = 0; index < Tags.Tags.length; index++) {

        body.push({
            "labelId": Tags.Tags[index],
            "color": colors[Math.floor(Math.random() * colors.length)],
            "duration": 20,
            "pattern": "EACH_2_SECONDS"
        });
    }

    try {
        const response = await axios.post(`https://api-eu.vusion.io/vlink-pro/v1/stores/${storeId}/labels/flash`, body, {
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