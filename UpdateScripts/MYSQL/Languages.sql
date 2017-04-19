
/* Arabic (ar) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'ar', 'Arabic', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'ar')
LIMIT 1; 

/* Bulgarian (bg) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'bg', 'Bulgarian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'bg')
LIMIT 1; 

/* ChinesePeoplesRepublicofChina (zh-CN) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'zh-CN', 'ChinesePeoplesRepublicofChina', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'zh-CN')
LIMIT 1; 

/* ChineseTaiwan (zh-TW) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'zh-TW', 'ChineseTaiwan', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'zh-TW')
LIMIT 1; 

/* Croatian (hr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'hr', 'Croatian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'hr')
LIMIT 1; 

/* Czech (cs) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'cs', 'Czech', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'cs')
LIMIT 1; 

/* Danish (da) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'da', 'Danish', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'da')
LIMIT 1; 

/* Dutch (nl) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'nl', 'Dutch', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'nl')
LIMIT 1; 

/* Estonian (et) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'et', 'Estonian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'et')
LIMIT 1; 

/* Finnish (fi) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'fi', 'Finnish', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'fi')
LIMIT 1; 

/* French (fr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'fr', 'French', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'fr')
LIMIT 1; 

/* German (de) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'de', 'German', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'de')
LIMIT 1; 

/* Greek (el) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'el', 'Greek', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'el')
LIMIT 1; 

/* Hebrew (iw) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'iw', 'Hebrew', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'iw')
LIMIT 1; 

/* Hindi (hi) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'hi', 'Hindi', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'hi')
LIMIT 1; 

/* Hungarian (hu) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'hu', 'Hungarian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'hu')
LIMIT 1; 

/* Icelandic (is) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'is', 'Icelandic', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'is')
LIMIT 1; 

/* Italian (it) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'it', 'Italian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'it')
LIMIT 1; 

/* Japanese (ja) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'ja', 'Japanese', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'ja')
LIMIT 1; 

/* Korean (ko) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'ko', 'Korean', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'ko')
LIMIT 1; 

/* Latvian (lv) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'lv', 'Latvian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'lv')
LIMIT 1; 

/* Lithuanian (lt) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'lt', 'Lithuanian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'lt')
LIMIT 1; 

/* Macedonian (mk) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'mk', 'Macedonian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'mk')
LIMIT 1; 

/* Norwegian (no) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'no', 'Norwegian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'no')
LIMIT 1; 

/* Polish (pl) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'pl', 'Polish', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'pl')
LIMIT 1; 

/* Portuguese (pt) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'pt', 'Portuguese', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'pt')
LIMIT 1; 

/* Romanian (ro) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'ro', 'Romanian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'ro')
LIMIT 1; 

/* Russian (ru) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'ru', 'Russian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'ru')
LIMIT 1; 

/* Serbian (sr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'sr', 'Serbian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'sr')
LIMIT 1; 

/* Slovenian (sl) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'sl', 'Slovenian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'sl')
LIMIT 1; 

/* Swedish (sv) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'sv', 'Swedish', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'sv')
LIMIT 1; 

/* Turkish (tr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'tr', 'Turkish', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'tr')
LIMIT 1; 

/* Ukrainian (uk) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT UUID(), 'uk', 'Ukrainian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'uk')
LIMIT 1; 
