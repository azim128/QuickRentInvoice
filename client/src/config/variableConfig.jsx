const api_url = import.meta.env.VITE_API_URL;
const fetch_api_url = import.meta.env.VITE_FETCH_DATA_URL;

const api_version = import.meta.env.VITE_API_VERSION;
const serverl_url = `${api_url}api/${api_version}`;
export { serverl_url ,fetch_api_url};
