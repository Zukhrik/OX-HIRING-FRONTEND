# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

#Vazifa (Task)


Umumiy shartlar: Barchasi React orqali bo’lishi kerak. Qo’shimcha package’lar ishlatishingiz mumkin. Lekin ko’p ishlatmang. UI/UX tartibli bo’lishi kifoya. Avval barcha shartlar bajarilganligi tekshiriladi. Qo’shimcha qilishingiz sizga foyda bo’lishi mumkin. AntDesign ishlatishingizni tavsiya qilamiz.

Savollar bo’lsa sizga shu topshiriqni bergan odamga yuboring. 

Bu yerda barcha kerakli narsalar oshig’i bilan tushuntirilgan. Savolingizga javob bermasak demak siz nimanidir xato qilyabsiz.
Muddat: vazifa topshirilgandan boshlab 48 soat.

Vazifalarni biror servisga qo’yib ko’rsating. 
Misol uchun. 
vercel.com
codesandbox.io
netlify.com
Kodlaringiz alohida kerak. Github yoki boshqa yerga joylab link bersangiz bo’ladi. 
Vazifangizni topshirishdan avval bravzerni “incognito” rejimida tekshirib ko’ring.

Vazifani topshirganingizdan so’ng kuting. Ko’rib chiqilib agar natijasi maqqul bo’lsa sizga aloqaga chiqamiz.


Omad!


#API orqali avtorizatsa qilish. (authentication with api)


Request endpoint
POST https://{subdomain}.ox-sys.com/security/auth_check
 
Data
Params Description
_username - username
_password - password
_subdomain - subdomain company

Example request with curl
curl -X POST \
  https://{subdomain}.ox-sys.com/security/auth_check \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d '_username={username}&_password={yourpswd}&_subdomain={yourcompany}'

Example result
{
  "token": "eyJqJSFcp44uMVCA9sSk8jQu9IhkTTxf8wZNNgYqKILubms3fqzEcfym2bpc1zI3MnZd0LozalYzHRGmtiEMOnGDrIswaoHBmJmxjQ1V98McC8A699IGaPY1u9FaQNvQvAKg3D2JWP56WSOz10GK-g9LW8px5Mht9AlcdBDUWF8s70oevM",
  "lifetime": 1036800
}


Login & Parol & subdomain (Topshiriq uchun)
Username: user_task
Password: user_task
Subdomain: toko

#!!!Diqqat
Agar auth qilolmasangiz API bilan muommo yo’q. Nimanidir xato qilayotgan bo’lishingiz mumkin. Berilgan misolga e’tibor bering

Savol bo’lsa shu yerga komment ko’rinishida qoldiring
—401 dan boshqa response ham qaytadimi(https://toko.ox-sys.com/security/auth_check shunga so’rov yuborish kerakmi)?

Avtorizatsa sahifasini tayyorlash. (login page)
Login qilish imkoniyati bo’lishi kerak. Dizayni o’z hohishingiz bilan qilishingiz mumkin. Foydalanuvchi ishlatib tushanadigan bo’lishi kerak.

API orqali mahsulotlarni olish (Getting products from API)
Request endpoint
GET https://{subdomin}.ox-sys.com/variations

Data
Params	     Description
size		size list 
page 		page index of list

Example request with curl
curl --location --request GET 'https://face.ox-sys.com/variations' \
--header 'Authorization: Bearer {{token_here}}' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \

Example result
{
  "page": 1,
  "items": [
    {
      "sku": "20630550020",
      "supplier": "Fruits&Passion",
      "supplierId": 143,
      "category": null,
      "id": 19931,
      "barcode": "776288670944",
	....
      "lastUpdateTime": "2019-10-10 15:11:58",
      "showMarket": true,
      "uploadedImages": [],
      "innerHitIds": null,
      "technicalCard": false,
      "importProperties": []
    }
  ],
  "total_count": 35169
}
API’dan kelgan ma’lumot orqali mahsulotlar tablitsasini yasash. Tablitsa yasash uchun mahsus packega’lar ishlatish mumkin.
  (Products page with table)
Shartlar: 
1. Faqat Avtorizatsiydan o’tganlar ko’rishi mumkin bo’lishi kerak
2. Sahifalay olishi kerak (Pagination)

Qidiruv sahifasi. (search page with table) Yana bir tablitsa yasab mahsulotlarni nomi bo’yicha qidirish amalga oshirilganda mahsulotlar so’rovga mos ravishda ko’rinishi va tartiblanishi (sort) kerak. (Faqat client-side, API ga so’rov yuborilmaydi) (Search and sort by product name)
Tartiblanishi (sort) muhim. (so’rov berilgan ma’lumotni o’rniga qarab natija chiqishi kerak) Misolga etibor bering. (Sorting is important)
Ishingizni namunadagi ma’lumot bilan solishtirib ko’rishingiz mumkin.
Namuna ma’lumot (Example data and search result)
Tablitsa shu ko’rinishda bo’lsa
Olma
Nok
Banan
Ananas
Olcha
Anor

So’rov: ‘an’. Qidiruvdan keyingi holati:
Ananas
Anor
Banan

So’rov: ‘o’. Qidiruvdan keyingi holati:
Olcha
Olma
Nok
Anor
