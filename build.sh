#!/bin/bash

sudo docker login rg.fr-par.scw.cloud/djnd -u nologin -p $SCW_SECRET_TOKEN

sudo docker build -f Dockerfile -t creative-commons:latest .
sudo docker tag creative-commons:latest rg.fr-par.scw.cloud/djnd/creative-commons:latest
sudo docker push rg.fr-par.scw.cloud/djnd/creative-commons:latest