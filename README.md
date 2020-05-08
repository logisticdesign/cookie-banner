# CookieBanner v.1

Questa libreria consente l'integrazione semplificata e centralizzata del Cookie Banner all'interno della pagina web.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/logisticdesign/cookie-banner@1/dist/cookie-banner.min.css">
<script src="https://cdn.jsdelivr.net/gh/logisticdesign/cookie-banner@1/dist/cookie-banner.min.js"></script>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        CookieBanner.run();
    })
</script>
```

## Personalizzazione

È possibile personalizzare la configurazione attraverso il metodo `setup`:

```js
document.addEventListener('DOMContentLoaded', () => {
    CookieBanner.setup({
        locale: 'it',
        policyPath: '/cookie-policy',
        cookieConsent: {
            type: 'opt-in',
            theme: 'classic',
            position: 'bottom-left',
            ignoreClicksFrom: ['cc-revoke', 'cc-btn', 'cc-link'],
        }
    }).run();
})
```

### Parametri

`locale`<br/>
Codice lingua da utilizzare per i testi del banner. Di **default** viene identicato l'attributo `lang` presente nel tag <html>, es. `<html lang="it">`

***

`policyPath`<br/>
Percorso della Cookie Policy

***

`cookieConsent`<br/>
Parametri per personalizzare il comportamento di CookieConsent. Per il dettaglio dei parametri fare riferimento alla [guida ufficiale](https://www.osano.com/cookieconsent/documentation/javascript-api/)
