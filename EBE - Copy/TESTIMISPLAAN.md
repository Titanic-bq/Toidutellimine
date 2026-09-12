# Testimisplaan – Taonar e-pood

## 1. Projekti kirjeldus

Taonar on veebipõhine e-pood, kus kasutaja saab vaadata tooteid,
lisada neid ostukorvi, hallata ostukorvi ning kasutada lemmiktooteid.

Projekt kasutab Node.js-i, Expressi backend'i ning JavaScripti
frontend'i.

## 2. Testimise eesmärk

Testimise eesmärk on kontrollida e-poe toimimist enne rakenduse
kasutamist. Ühiktestidega kontrollitakse väikeseid iseseisvaid funktsioone
eraldi ülejäänud rakendusest.

Testimisega soovin veenduda, et:

- toodete andmed ja hinnaloogika töötavad õigesti;
- ostukorv lisab, eemaldab ja muudab toodete koguseid õigesti;
- ostukorvi kogusumma arvutatakse õigesti;
- lemmiktoote kontroll töötab õigesti;
- tellimuse lisamine kliendi tellimuste ajalukku töötab.

## 3. Testitavad funktsionaalsused

| Testi nr | Funktsionaalsus                         | Miks testida                                          | Oodatav tulemus                                       |
| -------- | --------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| 1        | `Product.describe()`                    | Kontrollida, et toote kirjeldus moodustatakse õigesti | Tagastatakse nimi, hind ja kategooria õiges formaadis |
| 2        | `Product.discountedPrice()`             | Kontrollida allahindluse arvutamist                   | Tagastatakse õige allahindlusega hind kahe komakohani |
| 3        | `Product.discountedPrice()` ümardamine  | Kontrollida hinnatulemuse täpsust                     | Hind ümardatakse kahe komakohani                      |
| 4        | `Cart.addProduct()`                     | Kontrollida uue toote lisamist ostukorvi              | Toode lisatakse koos õige kogusega                    |
| 5        | `Cart.addProduct()` olemasoleva tootega | Kontrollida sama toote uuesti lisamist                | Olemasoleva toote kogus suureneb                      |
| 6        | `Cart.calculateTotal()`                 | Kontrollida ostukorvi kogusumma arvutamist            | Tagastatakse kõikide toodete õige kogusumma           |
| 7        | `Cart.updateProductQuantity()`          | Kontrollida koguse vähendamist                        | Nulli jõudmisel eemaldatakse toode                    |
| 8        | `Cart.clear()`                          | Kontrollida ostukorvi tühjendamist                    | Ostukorv muutub tühjaks ja summa on 0                 |
| 9        | `Customer.isFavorite()`                 | Kontrollida lemmiktoote olemasolu                     | Olemasoleva lemmiku korral tagastatakse `true`        |
| 10       | `Customer.isFavorite()` puuduv toode    | Kontrollida negatiivset olukorda                      | Mitte-lemmiktoote korral tagastatakse `false`         |
| 11       | `Customer.placeOrder()`                 | Kontrollida tellimuse lisamist ajalukku               | Tellimuste ajalugu sisaldab uut tellimust             |

## 4. Testimisraamistik

Testimiseks kasutatakse Node.js-i sisseehitatud testimisraamistikku
`node:test` ja väiteid kontrollitakse mooduliga `node:assert`.

Testide käivitamiseks kasutatakse käsku:

```bash
npm test
```

See lahendus ei vaja eraldi testimisraamistiku paigaldamist, sest
`node:test` on Node.js-i osa.

## 5. Testimise sammud

1. Ava projekti kaust terminalis.
2. Käivita sõltuvuste paigaldamiseks vajadusel `npm install`.
3. Käivita testid käsuga `npm test`.
4. Kontrolli, et kõik testid lõppevad staatusega `pass`.
5. Tee terminalist kuvatõmmis, kus on näha edukalt läbitud testide arv.
6. Lisa kuvatõmmis selle dokumendi peatükki **6. Testimise tulemus**.
7. Commit'i muudatused GitHubi repositooriumisse.

## 6. Testimise tulemus

Testid käivitati käsuga:

```bash
npm test
```

## 7. Kokkuvõte

Koostatud testid kontrollivad projekti peamisi funktsioone:
toodete hinnastamist, ostukorvi toimimist ja kliendi tellimuste ning
lemmikute loogikat.

Edukalt läbitud testid andsit kinnitust, et kontrollitud funktsioonid
töötavad testandmete korral.
