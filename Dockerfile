FROM continuumio/miniconda3:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs

RUN mkdir -p /frontend
RUN mkdir -p /backend

COPY ./backend/requirements.yml /backend
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
COPY ./backend /backend

ENV PATH /opt/conda/envs/backend_motion/bin:$PATH
RUN echo "source activate backend_motion" >~/.bashrc

RUN mkdir -p /scripts
COPY ./scripts /scripts
RUN chmod +x /scripts

WORKDIR /frontend
COPY ./frontend/package.json /frontend/
RUN npm install
COPY ./frontend /frontend
RUN npm run build

WORKDIR /backend