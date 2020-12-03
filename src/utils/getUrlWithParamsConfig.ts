import config from "../config";

function getUrlWithParamsConfig (endpointConfig:string, query:any) {

    let url = {
        ...config.client.server,
        ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
        query: {
        }
    }

    const pathName = Object.keys(query).reduce((acc,val) => {
        if (acc.indexOf(`{${val}}`) !== -1) {
            const result = acc.replace(`{${val}}`,query[val]);
            delete query[val];
            return result;
        }
        return acc;
    }, url.pathname);

    url.pathname = pathName;

    url.query = {
        ...query,
    }

    return url;
}

export default getUrlWithParamsConfig;