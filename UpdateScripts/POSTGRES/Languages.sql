/* 
If you experience errors regarding the 'uuid_generate_v4' function, you may need to enable the uuid-ossp extension as shown below.
  create extension "uuid-ossp";
*/

/* Arabic (ar) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'ar', 'Arabic', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'ar');

/* Bulgarian (bg) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'bg', 'Bulgarian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'bg');

/* ChinesePeoplesRepublicofChina (zh-CN) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'zh-CN', 'ChinesePeoplesRepublicofChina', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'zh-CN');

/* ChineseTaiwan (zh-TW) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'zh-TW', 'ChineseTaiwan', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'zh-TW');

/* Croatian (hr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'hr', 'Croatian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'hr');

/* Czech (cs) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'cs', 'Czech', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'cs');

/* Danish (da) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'da', 'Danish', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'da');

/* Dutch (nl) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'nl', 'Dutch', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'nl');

/* Estonian (et) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'et', 'Estonian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'et');

/* Finnish (fi) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'fi', 'Finnish', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'fi');

/* French (fr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'fr', 'French', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'fr');

/* German (de) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'de', 'German', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'de');

/* Greek (el) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'el', 'Greek', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'el');

/* Hebrew (iw) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'iw', 'Hebrew', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'iw');

/* Hindi (hi) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'hi', 'Hindi', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'hi');

/* Hungarian (hu) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'hu', 'Hungarian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'hu');

/* Icelandic (is) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'is', 'Icelandic', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'is');

/* Italian (it) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'it', 'Italian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'it');

/* Japanese (ja) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'ja', 'Japanese', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'ja');

/* Korean (ko) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'ko', 'Korean', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'ko');

/* Latvian (lv) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'lv', 'Latvian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'lv');

/* Lithuanian (lt) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'lt', 'Lithuanian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'lt');

/* Macedonian (mk) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'mk', 'Macedonian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'mk');

/* Norwegian (no) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'no', 'Norwegian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'no');

/* Polish (pl) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'pl', 'Polish', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'pl');

/* Portuguese (pt) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'pt', 'Portuguese', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'pt');

/* Romanian (ro) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'ro', 'Romanian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'ro');

/* Russian (ru) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'ru', 'Russian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'ru');

/* Serbian (sr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'sr', 'Serbian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'sr');

/* Slovenian (sl) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'sl', 'Slovenian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'sl');

/* Swedish (sv) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'sv', 'Swedish', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'sv');

/* Turkish (tr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'tr', 'Turkish', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'tr');

/* Ukrainian (uk) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT uuid_generate_v4(), 'uk', 'Ukrainian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'uk');
