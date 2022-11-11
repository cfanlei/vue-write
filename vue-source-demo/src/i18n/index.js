import VueI18n from 'vue-i18n'
import CN from './cn'
import EN from './en'
import Vue from 'vue'
Vue.use(VueI18n)


const locale = 'zh-CN'
class CustomFormatter {
    constructor (options={}) {
        this._locale = options.locale || locale
    }

    //
    // interpolate
    //
    // @param {string} message
    //   string of list or named format.
    //   e.g.
    //   - named formatting: 'Hi {name}'
    //   - list formatting: 'Hi {0}'
    //
    // @param {Object | Array} values
    //   values of `message` interpolation.
    //   passed values with `$t`, `$tc` and `i18n` functional component.
    //   e.g.
    //   - $t('hello', { name: 'kazupon' }) -> passed values: Object `{ name: 'kazupon' }`
    //   - $t('hello', ['kazupon']) -> passed values: Array `['kazupon']`
    //   - `i18n` functional component (component interpolation)
    //     <i18n path="hello">
    //       <p>kazupon</p>
    //       <p>how are you?</p>
    //     </i18n>
    //     -> passed values: Array (included VNode):
    //        `[VNode{ tag: 'p', text: 'kazupon', ...}, VNode{ tag: 'p', text: 'how are you?', ...}]`
    //
    // @return {Array<any>}
    //   interpolated values. you need to return the following:
    //   - array of string, when is using `$t` or `$tc`.
    //   - array included VNode object, when is using `i18n` functional component.
    //
    interpolate (message, values) {
        
      // implement interpolation logic here
      // ...

      // return the interpolated array
      return ['resolved message string']
    }
}

// register with `formatter` option
const i18n = new VueI18n({
 locale,
//  formatter: new CustomFormatter({
//     locale
//  }),
 messages: {
   'en-US': {
    message:EN
   },
   'zh-CN': {
    message:CN
   }
 }
})
export default i18n