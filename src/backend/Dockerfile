FROM python:3

COPY . .

RUN pip install --no-cache-dir -r requirements.txt
RUN pip install flask-cors --upgrade
RUN pip install gunicorn==20.0.4

EXPOSE 1234
CMD ["gunicorn", "--workers", "3", "-b", "0.0.0.0:1234", "server:app"]