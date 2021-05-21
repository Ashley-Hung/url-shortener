# 短網址產生器

這是一個由 Node.js 和 Express 建立的記賬網站。

## 主要功能

- 輸入原始網址後會產生格式化的短網址
- 如果輸入的不是網址會顯示錯誤
- 所有產生的短網址皆不會重複
- 短網址的格式為 5 碼英數混合
- 如果輸入的原始網址已存在於資料庫中，會直接回產已存在的短網址
- 可以一鍵複製短網址
- 可以瀏覽所有已存在的短網址，並直接點選連結過去

👉 Try it on [Heroku](https://gentle-springs-80779.herokuapp.com/)

![demo](https://github.com/Ashley-Hung/url-shortener/blob/master/demo.gif)

## 建置環境

- [Node.js](https://nodejs.org/en/)：14.16.1
- [Express](https://www.npmjs.com/package/express)：4.17.1
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)：5.3.2
- [body-parser](https://www.npmjs.com/package/body-parser)： 1.19.0
- [url-exists](https://www.npmjs.com/package/url-exists)：1.0.3
- [mongoose](https://www.npmjs.com/package/mongoose)：5.12.10
- [mongoDB](https://www.mongodb.com/try/download/community)：4.2.13

## 安裝與執行

1. clone 此專案至本機電腦

   ```
   $ git clone https://github.com/Ashley-Hung/url-shortener.git
   ```

2. 安裝

   ```
   $ cd url-shortener
   $ npm install
   ```

3. 執行

   ```
   $ npm run seed
   $ npm run dev
   ```

4. 執行成功後，Terminal 會顯示下列訊息

   ```
   App is listening on localhost:3000
   ```

5. 使用下列 URL 於瀏覽器上進行瀏覽

   ```
   http://localhost:3000
   ```




## 開發者

Ashley-Hung



