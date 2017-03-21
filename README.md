# PatDetect Project
This project aims to enumerate all of the world's commonly used string patterns.

## Project Dependencies
- [Discogs API](https://www.discogs.com/developers/)
- [ZipCodeAPI.com](https://www.zipcodeapi.com/)

## Contributing
Please do not edit the README.md file yourself. The only things I shall see in the PRs submitted to me will be appropriate edits to the `regexp_*.json` files. All other edits will be reviewed on a case-by-case basis.

## Contact Information
- Email: sunquan8094 dot gmail dot com

## In-person Demonstrations
As I have yet to publicly release execution instructions, I am willing to do in-person demonstrations. If you just so happen to be on the island of O'ahu in Hawaii and would like to see this in action, feel free to email me to arrange a demonstration date and time. Location is negotiable as long as it is on the island.

## Table of Contents
1. [Hangeul](#hangeul)
2. [Hanzi](#hanzi)
3. [Numbers](#numbers)
4. [Uppercase Roman Letters](#uppercase-roman-letters)

## Hangeul
- License Plates in South Korea - Private Vehicles: `/([가나다라마거너더러머버서어저고노도로모보소오조구누두루무부수우주][0-9]{4})/`

## Hanzi
- License Plates in the People's Republic of China - Compact Vehicles: `/([京渝沪津皖闽甘粤贵琼冀黑豫鄂湘苏赣吉辽青陕鲁晋川云浙桂蒙宁藏新][A-R][0-9]{4})/`

## Numbers
- Phone Numbers in the United States: `/(1-[0-9]{3}-[0-9]{3}-[0-9]{4})/`
- Social Security Numbers in the United States: `/([0-9]{3}-[0-9]{2}-[0-9]{4})/`
- ZIP Codes in the United States: `/([0-9]{5}(-[0-9]{4})?)/`

## Uppercase Roman Letters
- Postal Abbreviations in Canada: `/(AB|BC|MB|N[BLS-U]|ON|PE|QC|SK|YT)/`
- Postal Codes in Canada: `/([A-CEGHJ-NP-TVXY][0-9][A-CEGHJ-NP-TV-Z] [0-9][A-CEGHJ-NP-TV-Z][0-9])/`
- License Plates in the State of Hawaii, United States - Passenger Vehicles: `/([A-GJNPR-Y][A-GIN-Y]{2} [0-9]{3})/`
- Postal Abbreviations in the United States: `/(A[AEKPLRSZ]|C[AOT]|D[CE]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHIN-PST]|N[C-EHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])/`
- Record Label Catalog Number: `/([A-Z0-9]+[A-Z][0-9]{3}[A-Z]?)/`
