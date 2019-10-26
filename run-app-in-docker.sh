#!/usr/bin/env bash
docker build --rm -f "dockerfile" -t aerohappy:latest .
docker run -p 4000:4000 aerohappy
