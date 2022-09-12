FROM python:3

COPY . .

RUN pip3 install --no-cache-dir -r requirements.txt
RUN pip3 install flask-cors --upgrade
RUN pip3 install gunicorn==20.0.4

EXPOSE 3456
CMD ["python", "./server.py"]