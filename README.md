# AI2X Takım Web Sitesi

Modern ve yenilikçi bir tasarıma sahip, öğrenci takımı için geliştirilmiş web sitesi.

## Proje Hakkında

Bu web sitesi, üniversite öğrencilerinden oluşan AI2X takımının başarılarını, devam eden projelerini ve ekip üyelerini tanıtmak için tasarlanmıştır. Robotaksi, TÜBİTAK ve TEKNOFEST gibi birçok teknoloji yarışmasında yer alan ekibin çalışmalarını sergiler.

## Özellikler

- Responsive tasarım (tüm cihazlarda düzgün görüntüleme)
- Modern ve şık arayüz
- Animasyonlar ve interaktif öğeler
- Projeler için ilerleme takibi
- Takım üyeleri tanıtımı
- İletişim formu

## Kurulum

1. Repoyu klonlayın veya indirin
2. Gerekli görselleri `assets` klasörüne ekleyin (aşağıdaki listeye bakın)
3. Herhangi bir lokal web sunucusuyla çalıştırın (örneğin, VS Code'da Live Server eklentisi)

## Gerekli Resimler

Aşağıdaki resimleri `assets` klasörüne eklemeniz gerekmektedir:

- `hero-bg.jpg` - Ana sayfa arka plan resmi
- `team-working.jpg` - Takım çalışması görseli
- `mert-almali.jpg` - Mert Almalı profil resmi
- `gokay-dervisoglu.jpg` - Gökay Dervişoğlu profil resmi
- `mehmet-ali-gumusler.jpg` - Mehmet Ali Gümüşler profil resmi
- `ali-emre.jpg` - Ali Emre profil resmi
- `eray-burak-cakir.jpg` - Eray Burak Çakır profil resmi

## Dosya Yapısı

```
ai2x_site/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stillemeleri
├── script.js           # JavaScript fonksiyonları
├── README.md           # Bu dosya
└── assets/             # Görseller için klasör
    ├── hero-bg.jpg
    ├── team-working.jpg
    ├── mert-almali.jpg
    ├── gokay-dervisoglu.jpg
    ├── mehmet-ali-gumusler.jpg
    ├── ali-emre.jpg
    └── eray-burak-cakir.jpg
```

## Özelleştirme

- Renk şemasını değiştirmek için `styles.css` dosyasında `:root` içindeki değişkenleri düzenleyin
- İçeriği güncellemek için `index.html` dosyasını düzenleyin
- Logo ve marka kimliğini kendi takımınıza uygun şekilde değiştirin

## İletişim Formu

İletişim formu şu anda sadece frontend doğrulaması yapmaktadır. Gerçek bir form işlemesi için bir backend entegrasyonu gereklidir.

## Katkıda Bulunanlar

- AI2X Takımı

## Lisans

Bu proje GPL-3.0 lisansı altında lisanslanmıştır. 
