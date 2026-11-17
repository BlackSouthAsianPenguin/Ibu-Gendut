# Babi Guling Ibu Gendut — Official Website

Website restoran Babi Guling Ibu Gendut, Mas, Ubud, Bali.

## Fitur
- Landing page responsive (mobile & desktop)
- Informasi menu dan lokasi restoran
- Google Maps embed dan tombol petunjuk arah
- Tombol baca dan tulis review di Google Maps

## GitHub Pages
1. Buka Settings > Pages.
2. Di bagian Build and deployment, pilih **Deploy from a branch**.
3. Pilih branch **main** dan folder **/(root)** lalu **Save**.
4. URL yang diharapkan: https://blacksouthasianpenguin.github.io/Ibu-Gendut/

## Catatan
- Rating dan review terbaru dibuka langsung di Google Maps; website ini tidak mengakses Google Places API.
- Alamat dan menu dari listing publik perlu diverifikasi oleh pemilik restoran. Ganti informasi bila diperlukan.

## Struktur Aset

```text
Ibu-Gendut/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── ibu-gendut-mark.svg
└── README.md
```

Semua path memakai referensi relatif agar bisa dipublikasikan melalui GitHub Pages pada subpath `/Ibu-Gendut/`. File SVG adalah ikon ilustratif, bukan foto makanan/restoran asli. Untuk menambahkan foto resmi, unggah ke `images/` dan referensikan dari HTML.
