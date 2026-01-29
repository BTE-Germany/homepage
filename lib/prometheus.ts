import { PrometheusDriver } from 'prometheus-query';

const prom = new PrometheusDriver({
    endpoint: "http://cloud.bte.ger:9090",
    baseURL: "/api/v1"
});

export default prom;