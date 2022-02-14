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
                animateRevokable: false,
                revokeBtn: `
                    <div class="cc-revoke" title="Cookie">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path d="M17.07 8.93c-2.55-.39-4.57-2.41-4.99-4.94C6.73 3.82 4 8.69 4 12c0 4.41 3.59 8 8 8c4.06 0 7.7-3.14 7.98-7.45a5.033 5.033 0 0 1-2.91-3.62zM8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15zm2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm4.5 6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z" fill="#e1be64"/>
                            <circle cx="10.5" cy="8.5" r="1.5" fill="#333333"/>
                            <circle cx="8.5" cy="13.5" r="1.5" fill="#333333"/>
                            <circle cx="15" cy="15" r="1" fill="#333333"/>
                            <path d="M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22c-2.97 1-5.78-1.59-5.19-4.56C7.1.74 2 6.41 2 12c0 5.52 4.48 10 10 10c5.89 0 10.54-5.08 9.95-11.01zM12 20c-4.41 0-8-3.59-8-8c0-3.31 2.73-8.18 8.08-8.02c.42 2.54 2.44 4.56 4.99 4.94c.07.36.52 2.55 2.92 3.63C19.7 16.86 16.06 20 12 20z" fill="#333333"/>
                        </svg>
                    </div>
                `,
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
                console.log('ciao');

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
                link: "Scopri di più",
                href: policyPath,
                deny: "Rifiuta",
                allow: "Accetta",
                message: "Noi e terze parti selezionate utilizziamo cookie o tecnologie simili per finalità tecniche e, con il tuo consenso, anche per altre finalità come specificato nella cookie policy. Puoi liberamente prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento. Puoi acconsentire all’utilizzo di tali tecnologie utilizzando il pulsante “Accetta”. Chiudendo questa informativa, continui senza accettare."
            },
            en: {
                link: "Learn more",
                href: policyPath,
                deny: "Reject",
                allow: "Accept",
                message: "We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, for other purposes as specified in the cookie policy. You can freely give, deny, or withdraw your consent at any time. You can consent to the use of such technologies by using the “Accept” button. By closing this notice, you continue without accepting."
            },
            de: {
                link: "Mehr erfahren",
                href: policyPath,
                deny: "Ablehnen",
                allow: "Zustimmen",
                message: "Wir und ausgewählte Dritte setzen für technische Zwecke und, mit Ihrer Einwilligung, für andere Zwecke Cookies und ähnliche Technologien ein, so wie in der Cookie-Richtlinie beschrieben. Ihre Einwilligung können Sie jederzeit erteilen, verweigern oder widerrufen. Sie willigen in den Einsatz solcher Technologien ein, indem Sie den „Zustimmen“-Button betätigen. Indem Sie diesen Hinweis schließen, fahren Sie fort, ohne zuzustimmen."
            },
            fr: {
                link: "Obtenire plus d'information",
                href: policyPath,
                deny: "Refuser",
                allow: "Accepter",
                message: "Les tiers sélectionnés et nous-mêmes utilisons des cookies ou des technologies similaires à des fins techniques et, avec votre consentement, à d'autres fins, comme décrit dans la politique relative aux cookies. Vous pouvez librement donner, refuser ou retirer votre consentement à tout moment. Vous pouvez consentir à l’utilisation de ces technologies en vous servant du bouton « Accepter ». En fermant le présent avis, vous continuez sans accepter."
            },
            es: {
                link: "Saber más",
                href: policyPath,
                deny: "Rechazar",
                allow: "Acceptar",
                message: "Nosotros y terceros seleccionados utilizamos cookies o tecnologías similares con fines técnicos y, con su consentimiento, para otras finalidades según se especifica en la política de cookies. Usted es libre de otorgar, denegar o revocar su consentimiento en cualquier momento. Puede consentir el uso de dichas tecnologías utilizando el botón de “Aceptar”. Al cerrar esta nota informativa, usted continúa sin aceptar."
            }
        }

        return contents[locale] || contents[this._defaultLocale]
    }
}

window.CookieBanner = new CookieBanner
