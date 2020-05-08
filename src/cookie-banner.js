import merge from 'merge';
import { CookieConsent } from 'cookieconsent';

export default class CookieBanner
{
    constructor() {
        this._defaultLocale = 'en'

        this._options = {
            locale: document.documentElement.lang || this._defaultLocale,
            policyPath: '/cookie-policy',
            cookieConsent: {
                type: 'opt-in',
                theme: 'classic',
                position: 'bottom-left',
                ignoreClicksFrom: ['cc-revoke', 'cc-btn', 'cc-link'],
            }
        }

        this._options.cookieConsent = Object.assign(
            this.events(),
            this._options.cookieConsent,
        )
    }

    setup(options = {}) {
        this._options = merge.recursive(this._options, options)

        return this
    }

    run() {
        this._options.cookieConsent.content = merge(
            this.getContent(),
            this._options.cookieConsent.content
        )

        cookieconsent.initialise(this._options.cookieConsent)

        return this
    }

    events() {
        let self = this

        return {
            onInitialise: function(status) {
                if (this.hasConsented()) {
                    self.runPreventedScripts()
                }
            },
            onStatusChange: function(status, chosenBefore) {
                if (this.hasConsented()) {
                    self.runPreventedScripts()
                }
            },
            onRevokeChoice: function() {
                self.blockPreventedScripts()
            },
        }
    }

    runPreventedScripts() {
        document.querySelectorAll('.cookie-prevent').forEach(el => {
            if (el.hasAttribute('data-suppressedsrc')) {
                el.setAttribute('src', el.getAttribute('data-suppressedsrc'))
            }
        })

        document.querySelectorAll('.cookie-prevent-inline').forEach(el => {
            if (el.getAttribute('type') == 'text/plain') {
                var newScriptEl = el

                newScriptEl.setAttribute('type', 'text/javascript')
                el.parentNode.insertBefore(newScriptEl, el.nextSibling)
            }
        })
    }

    blockPreventedScripts() {
        document.querySelectorAll('.cookie-prevent').forEach(el => {
            if (el.hasAttribute('src')) {
                el.setAttribute('data-suppressedsrc', el.getAttribute('src'))
                el.removeAttribute('src')
            }
        })

        document.querySelectorAll('.cookie-prevent-inline').forEach(el => {
            if (el.getAttribute('type') == 'text/javascript') {
                var newScriptEl = el

                newScriptEl.setAttribute('type', 'text/plain')
                el.parentNode.insertBefore(newScriptEl, el.nextSibling)
            }
        })
    }

    getContent(locale = this._options.locale, policyPath = this._options.policyPath) {
        let contents = {
            it: {
                link: "Scopri di più 😱",
                href: policyPath,
                deny: "Rifiuta",
                allow: "Accetta",
                message: "Questo sito o gli strumenti di terze parti in esso integrati trattano dati personali (es. dati di navigazione o indirizzi IP) e fanno uso di cookie o altri identificatori necessari per il funzionamento e per il raggiungimento delle finalità descritte nella cookie policy."
            },
            en: {
                link: "Learn more",
                href: policyPath,
                deny: "Reject",
                allow: "Accept",
                message: "This website or its third-party tools process personal data (e.g. browsing data or IP addresses) and use cookies or other identifiers, which are necessary for its functioning and required to achieve the purposes illustrated in the cookie policy."
            },
            de: {
                link: "Mehr erfahren",
                href: policyPath,
                deny: "Ablehnen",
                allow: "Zustimmen",
                message: "Diese Website bzw. über die Website eingesetzte Drittanbieterdienste verarbeiten personenbezogene Daten (z.B. Browsing-Daten oder IP-Adressen) und verwenden Cookies bzw. andere Identifikatoren, die für das Funktionieren der Website sowie zu den in den Cookie-Richtlinien beschriebenen Zwecken notwendig sind."
            },
            fr: {
                link: "Obtenire plus d'information",
                href: policyPath,
                deny: "Refuser",
                allow: "Accepter",
                message: "Le présent site et les outils de tiers traitent des données personnelles (ex : données de navigation ou adresses IP) et utilisent des cookies ou d’autres identifiants qui sont nécessaires à son fonctionnement et sont requis pour atteindre les finalités présentées dans la politique relative aux cookies."
            },
            es: {
                link: "Saber más",
                href: policyPath,
                deny: "Rechazar",
                allow: "Acceptar",
                message: "Este sitio web o sus herramientas de terceros tratan datos personales (p.ej. datos de navegación o direcciones IP) y utilizan cookies u otros identificadores, que son necesarias para su funcionamiento y para alcanzar los objetivos indicados en la política de cookies."
            }
        }

        return contents[locale] || contents[this._defaultLocale]
    }
}

window.CookieBanner = new CookieBanner
