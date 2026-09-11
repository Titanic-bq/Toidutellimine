# Tööriistade e-pood Taonar

## Mida on tehtud

Projektis on loodud tööriistade e-pood, kus saab:

- vaadata kõiki tooteid, mis on E-poes saadaval (praegu 1 kategooria ja 4 toodet )
- Võimalus vaadata toodet ID järgi
- Võimalik tooteid kategooria järgi filtreerida
- vaadata kategooriate nimekirjasi
- lisada tooteid mida soovib osta ostukorvi
- muuta ostukorvis toodete koguseid, kui on tarvis rohkem osta sama toodet
- eemaldada tooteid ostukorvist, mis on kogematta lisatud
- tühjendada ostukorvi
- lisada ja eemaldada lemmiktooteid, mida kasutajale meeldib ning soovib osta edasi
- hoida lemmikuid backendis kliendi ID järgi
- hoida kliendi ID-d sessionis
- hoida ostukorvi localStorage'is

Backend on loodud Node.js ja Expressiga.

Tooted loetakse products.json failist ning lemmikud salvestatakse favorites.json faili.

## Node.js versioon

Node.js 22 ning uuem.

## Projekti käivitamine

1. Ava projekti kaust terminalis.

2. Paigalda vajalikud paketid:

bash
npm install
