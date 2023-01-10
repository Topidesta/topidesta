---
template: "post"
title: Un-Official Whatsapp API
cover: "../images/apiwa2.png"
date: "2022-12-30T08:00:00Z"
slug: "un-official-whatsapp-api"
keywords: "Unofficial Whatsapp API Bayar Gratis"
categories:
  - belajar
tags:
  - project
  - whatsapp
  - API
---

Bismillah ....

Sebetulnya ini bukan untuk ditiru ya, kalo perusahaan kalian gak pelit banget, dan mau centang biru mending ambil API yang berbayar

> https://business.whatsapp.com/products/platform-pricing

tapi tenang, diluar sana ada juga kok yang memanfaatkan API yang free alias Gratis dengan memanfaatkan web whatsapp

> https://web.whatsapp.com

beberapa library yang terkenal seperti [baileys](https://github.com/adiwajshing/Baileys) dan [whatsapp-web.js](https://wwebjs.dev/) yang menggunakan bahasa typescript/ javascript, ada juga yang menggunakan python atau golang loh, mantap kan ya.

lanjut, karena lingkup kerja gw butuh hasil ketimbang proses, dan gw sendiri lebih familiar dengan javascript, akhirnya coba hunting deh API yang ready to production. liat aja di pojok kanan github library tersebut, **Used by** nah, dapat deh beberapa yang berhasil mengembangkan yang sudah ada API Rest. Tinggal test deh endpointnya dengan postman atau insomnia, kalo udah bisa, running deh diserver, ouh iya, kalo mau di onlinekan, sebisa mungkin gunakan domain ya, jangan pake IP Publik, karena nanti port nodejsnya terexpose.

Untuk server pernah gw bahas di postingan [membangun server dengan aapanel](membangun-server-ubuntu-aapanel), gw taro service di sana, dengan memaksimalkan Whatsapp Pairing, ada 4 device yang bisa kita pairing. Ouh iya, sebelum pake API Whatsapp Un-Official, gw pake service zenziva yang berbayar pake kredit, kalo sekarang itu hanya untuk Backup saja, baiklah gw share ya, beberapa API yang bisa dipakai tapi dengan terbatas

## Freemium

1. https://whatsva.id // 100 Pesan per hari (Free Version)
2. https://console.zenziva.net // Bayar dengan Kredit
3. https://api.kirimwa.id // 100 Pesan per hari (Free Version)

## Freedom

1. https://github.com/syifarahmat/baileys.api.server
2. https://github.com/canove/whaticket-community
3. https://github.com/salman0ansari/whatsapp-api-nodejs
4. https://github.com/aamdsam/wa-chat-bot (Dari Group PETIRS Telegram)
5. https://github.com/ngekoding/whatsapp-api-tutorial
6. https://github.com/novaariyanto/Panel-WhatsApp-Gateway

Ada kelebihan ada kekurangan masing masing API Restfull Whatsapp, misalkan ada yang bisa kirim sticker ada yang bisa kirim ke group saja, ada yang gak bisa kirim ke group, dan lain sebagianya, tapi secara umum semuanya bisa **kirim ke nomor whatsapp perorangan**

Di group Petirs (Pengguna TI Rumah Sakit) pernah dibahas juga, tentang memanfaatkan Whatsapp API Free untuk mesin penjawab otomatis, lihat di point #4 salah satu contoh kodingannya, next mungkin gw bisa research deh, kalo ada yang mau pdf nya ini gw share ya.

[Todo Lupa Naro](https://topidesta.my.id/)

Done.

Have a nice day!
