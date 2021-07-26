## All-out assignment

It is an assignment to create a page that has, similar to Google Translate, an input where the user puts the text they want to translate, a language select field and
a submit button. Whatever text is submitted, the page fetches a translation for that text in the selected language using the free [`DeepL API`](https://www.deepl.com/docs-api/translating-text/request/).

## How to run

This app uses `parcel` as a web-packer. To run it use the following command:

```bash
npm run dev
```
And navigate with your browser to the provided url. By default it is:

`http://localhost:1234`

![parcel](docs/parcel.png?raw=true "parcel")

## Notes

- The app currently utilizes the `free version` endpoints of the `Deepl API`: `https://api-free.deepl.com/v2/translate`
- To utilize it, one'd have to put their `authKey` in the [api.js](src/api.js) file:

```javascript
authKey: '<put your authKey here>';
```
