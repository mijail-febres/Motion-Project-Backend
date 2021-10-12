#!/bin/bash
python -c "import time;  time.sleep(3)"
python manage.py collectstatic --no-input
python manage.py migrate
python manage.py runserver 0:8000