# Gunakan image dasar httpd versi 2.4
FROM httpd:2.4

# Salin semua file/direktori ke dalam direktori htdocs Apache
COPY . /usr/local/apache2/htdocs/

