# crud app

create read update delete

- 1 form içerisinden gelen verileri al ve state'e aktar
- - ekle butonuna tıklanınca formdan gelen kitap ismiyle beraber yeni bir obje oluşturulacak
- - değerleri: eklenme tarihi | kitap ismi | id | okundumu
- - oluşan objeyi kitaplar isminde bir diziyi tutan state'e aktar
- - son aşamada inputu temizle

- 2 books state'inde tutulan kitapları al ve map metodu ile listele(ekrana bas)
- - eğer state boşşa ekrana "henüz kitap eklenmedi" yaz
- - BookCard bileşenine kitap bilgilerini prop olarak gönder
- - BookCard bileşeninin kitapla ilgili bütün özelliklerini göster

- 3 kitap silme
- - herhangi bir kitabın sil butonuna basıldığında 
- - fonk. çalıştır ve silinecek elemenanın idsini gönder id'sini gönder `handleModal`
- - bir onay modal ı aç
- - vazgeçe tıklanırsa kapat `setShowModal(false)`
- - onaylanırsa silinecek id-ye eşit olmayanlarla yeni bir dizi olultur
- - oluşan  yeni diziye state'e aktar `hansleDelete()`

- 4 okundu olarak işaretle
- - okundu butonuna tıklanılınca çalışan fonksiyona kitap değerlerini yolla
- - kitabın isRed değerini tersine çevir
- - dizi içerisinde değişecek elemanı bul
- - değişecek elemanı çıkar yerine güncel halini ekle
- - state i güncelle

- 5 düzenle işelemini yap
- - düzenle butonuna tıklanınca ekrana bir modal açılsın
- - düzenlenecek kitabı state e aktar ve modal'ı aç
- - modal da kitap ismini değiştirmek için bit input olsun ( value'si kitabın ismi olucak)
- - input her değiştiğinde düzenlenecek elamanı tuttuğun satate'i güncelle 
- - vazgeç butonuna tıklanınca modal'ı kapat
- - kaydet butonuna tıklanınca ``handleEditBook`` fonksiyonu çalışsın
- - çaloşan fonksiyon kitaplar dizisini güncellesin (eski elemanı çıkarıp güncel halini koysun )
- - güncellerken isim ve date'i değiştir

![](screen.gif)