docker run -d --name prometheus -p 9091:9090 prom/prometheus

docker run -d --name grafana -p 3031:3030 -e "GF_SERVER_HTTP_PORT=3030" grafana/grafana
