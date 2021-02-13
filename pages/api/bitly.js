import axios from 'axios'


export default async (req, res) => {
    const { URL } = req.body

    const { url, data, headers } = getRequestParams(URL)

    try {
        const response = await axios.post(url, data, {headers})
        const { id } = response.data
        return res.status(200).json({ shortURL: id})
    }

    catch {
        return res.status(400).json({
            error: `There was an error shortening URL, please try again`
        })
    }
}


const getRequestParams = (URL) => {
    const ACCESS_TOKEN = process.env.BITLY_ACCESS_TOKEN;
    const GROUP_GUID = process.env.BITLY_GROUP_GUID
    const url = process.env.BITLY_URL

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    }

    const data = {
        long_url: URL,
        domain: 'bit.ly',
        group_guid: GROUP_GUID,
    }

    return {
        url,
        headers,
        data,
    }
}
