#!/bin/sh
# run from <...>/scripts
cd ../
sudo docker build -t run_ts_image . # build
sudo chown -R $USER:$(id -gn $USER) ./* # give permmisions in order to be able to adit the files
docker container rm -f run_ts_container # remove container if allready runing
docker run -itd --name run_ts_container -p 3005:3000 -v "$(pwd)"/:/app/ run_ts_image # run the container (entrypoint in dockerfile)
sleep 2 # give the container a two seconds to boot
docker container ls --filter name=run_ts_container # make sure the container is still runing
docker logs --follow run_ts_container # connect the shell to the container's logs outpout

# open new terminal and run :
# docker container exec -it run_ts_container bash
