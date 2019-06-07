# next-i18next-remoteFetch

I commented out some code in create-i18next-client.js and in create-config.js
Like this it fetches the translation files.
Like this I get the error I was telling you about with .includes in lng-from-req.js.
If I remove that part and always set language to fallback it errors as well, because none of the two values are valid. 
If I just set language to 'en' everything loads, but it doesn't apply the translation
