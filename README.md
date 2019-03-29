- remove file App.js, App.css, App.test.js
- naming file nya ga perlu Idr, cukup Nominal.js / Shards.js
- ketika manggil component, add space sebelum ditutup `<Nominal />` `<Shards />`
- add space after function `()` atau class. ex: 
  
  `class App extends Component {`
  
  `render() {`

- add newline after logic di component & sebelum return di render.
- ga perlu `;` di akhir.
- add space before & after import object `import { connect } from "react-redux"`
- tag html yg ga punya child, bisa langsung ditutup. ga perlu `<input></input>`, langsung `<input />`
- cari tau beda nya import 2 ini:

  `import mapStateToProps from "../utils/mapState"`
  
  `import { IDR_SHARDS } from "../utils/constant"`

- kalau udah pake Redux, sebisa mungkin, data dateng nya dari state aja. semisal `IDR_SHARDS` disimpen di state aja sebagai `shards`. kecuali emang bener" constants.
- by default, kalau bikin variable pakai `const` aja. kecuali variable itu nanti bakal di redefine, baru pakai `let`
- sebisa mungkin, di component ga perlu ada logic, logic functions nya dipisah aja di utils. misal jadi `mapShards`
