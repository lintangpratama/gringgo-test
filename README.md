# Getting Started with Create React App

Project demo [here](https://gringgo-test.netlify.app/).

Keynote tentang project ini.
- API endpoint menggunakan http sedangkan projek yang diupload menggunakan https sehingga data dari API tidak dapat difetch karena ada error insecure http request, site dengan https hanya bisa menerima data dari api endpoint https pula. Saran saya, project dapat diclone dan dijalankan di local.
- Pada saat menambahkan data provinsi, field id tidak digenerate otomatis dari API, sehingga id digenerate random dari frontend. selain itu, field id memiliki nilai maksimum 99, dan sudah ada beberapa data provinsi dengan id tertentu, sehingga ada kemungkinan data yang ditambahkan tidak diaccept karena adanya crash id.
- Data yang secara default ada dari API tidak dapat dihapus, namun data yang baru ditambahkan dapat dihapus.
