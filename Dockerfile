# Gunakan image dasar Python
FROM python:3.9-slim

# Setel direktori kerja di dalam container
WORKDIR /app

# Salin seluruh aplikasi ke dalam container
COPY . .

# Tentukan perintah untuk menjalankan aplikasi
CMD ["python", "app.py"]
