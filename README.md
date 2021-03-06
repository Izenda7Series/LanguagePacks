## Overview
The Izenda 7 Series language pack allows you to support additional languages in the application UI. 

 :warning: This feature does not translate your reporting database information.

## Supported Languages
- Arabic - ar
- Bulgarian	- bg
- Chinese - zh-CN
- ChineseTaiwan - zh-TW
- Croatian - hr
- Czech - cs
- Danish - da
- Dutch - nl
- English - United States - en-US
- Estonian - et
- Finnish - fi
- French - fr-CA
- German - de
- Greek - el
- Hebrew - iw
- Hindi - hi
- Hungarian - hu
- Icelandic - is
- Italian - it
- Japanese - ja
- Korean - ko
- Latvian - lv
- Lithuanian - lt
- Macedonian - mk
- Norwegian - no
- Polish - pl
- Portuguese - pt
- Português (Brazil) - pt-BR
- Romanian - ro
- Russian - ru
- Serbian - sr
- Slovenian - sl
- Spanish - es
- Swedish - sv
- Turkish - tr
- Ukrainian - uk

:warning: The French language has been updated from *fr* to *fr-CA* in order to resolve a core app defect. 

## Installation

### Downloading Files
- Download the language pack <a href="https://github.com/Izenda7Series/LanguagePacks/archive/master.zip">here</a>.
- Extract the contents of the Languages folder to [Your Front End Folder]/languages (this will be a new folder you create in your Front End Folder to hold the new Language files)

### Updating the front end resources 
- Open the index.html file and add references to the desired languages as shown below:

```html
<!-- Add additional languages -->
<script type="text/javascript" src="/languages/Izenda.texts.ar.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.bg.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.cs.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.da.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.de.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.el.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.es.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.et.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.fi.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.fr-CA.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.hi.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.hr.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.hu.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.is.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.it.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.iw.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.ja.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.ko.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.lt.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.lv.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.mk.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.nl.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.no.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.pl.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.pt.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.ro.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.ru.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.sl.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.sr.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.sv.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.tr.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.uk.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.zh-CN.js"></script>
<script type="text/javascript" src="/languages/Izenda.texts.zh-TW.js"></script>
</body>
``` 
#### Important Note for Arabic and French (Canadian)
:warning: If you are using version 1.25.3 or earlier, and would like to use Arabic or French (Canadian) there are a few additional steps to take. These versions of Izenda include Arabic and French (Canadian) references that need to be removed.
- Open izenda_locales.js and rename the following as shown below (any arbitrary value will do): </br>
"fr-CA" -> "fr-CA-legacy" </br>
"ar" -> "ar-legacy" </br>

### Updating the database
:warning: As best practice, we always recommend backing up your data before any schema/data changes.

- In the UpdateScripts folder, open the folder for the database type housing your Izenda configuration database and run the Languages.sql file against your Izenda configuration database.

### Restart the API (optionally clear your browser cache)
- Open IIS Manager
- Restart the site housing the Izenda API

### Login and verify 
- Login to the application
- Under my profile, expand the languages dropdown and verify that the new languages are listed.

## Adding additional languages
Additional languages not included here can be added by creating a custom language file. You can use the Izenda.texts.en-US.js as a template.
- Download the <a href="https://github.com/Izenda7Series/LanguagePacks/blob/master/Templates/Izenda.texts.en-US.js">Izenda.texts.en-US.js</a> file.
- Modify the language specification (last line) to include the desired language.

```javascript
  }, 'zh-TW');
```
- Replace the English text with its translated equivalent for the desired language.

Original:
```javascript
  EXPORT_CONSTANTS_LABEL_MARGIN_TOP: 'Top',
  EXPORT_CONSTANTS_LABEL_MARGIN_LEFT: 'Left',
  EXPORT_CONSTANTS_LABEL_MARGIN_BOTTOM: 'Bottom',
```
Translated Values:
```javascript
  EXPORT_CONSTANTS_LABEL_MARGIN_TOP : '最佳',
  EXPORT_CONSTANTS_LABEL_MARGIN_LEFT : '剩下',
  EXPORT_CONSTANTS_LABEL_MARGIN_BOTTOM : '底部',
```

- Save the file to the front-end, you may find it helpful to follow the naming conventions above, Izenda.texts.{language code here}.js 
- Update the database to include the new language, you can modify the SQL statement below:

```sql
/* ChineseTaiwan (zh-TW) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'zh-TW')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES(NEWID(), 'zh-TW', 'ChineseTaiwan', 0);
    END
END
```
