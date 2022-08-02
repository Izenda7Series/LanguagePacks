/* Arabic (ar) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'c8a07bd5-c099-49ea-afb5-eea7767ef151', 'ar', 'Arabic', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'ar');

/* Bulgarian (bg) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '34216355-a0f7-41c7-b7cd-bb187cb604b9', 'bg', 'Bulgarian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'bg');

/* ChinesePeoplesRepublicofChina (zh-CN) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'aaa1a54b-5408-426e-a613-bfa006c81462', 'zh-CN', 'ChinesePeoplesRepublicofChina', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'zh-CN');

/* ChineseTaiwan (zh-TW) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'b98bd95d-76c2-477a-bd0a-c3facc0a5319', 'zh-TW', 'ChineseTaiwan', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'zh-TW');

/* Croatian (hr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'e45a3380-7374-44f8-b77d-56d5c887b196', 'hr', 'Croatian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'hr');

/* Czech (cs) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '381e3dd6-a5b9-49a5-a645-cd7a76e9f827', 'cs', 'Czech', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'cs');

/* Danish (da) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '579d788b-9dd9-429e-bca5-d805fcbb400b', 'da', 'Danish', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'da');

/* Dutch (nl) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '6e1d52f2-afbc-4d18-ab3f-1be0c3b66cdd', 'nl', 'Dutch', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'nl');

/* Estonian (et) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '0b1a5409-99b1-40b4-8462-6ad3426a5ffa', 'et', 'Estonian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'et');

/* Finnish (fi) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'd3fa462a-41ba-4417-bca5-eaf0bcbb0296', 'fi', 'Finnish', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'fi');

/* French (fr-CA) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'a08d220c-9efd-4e05-88d0-55c19ea64103', 'fr-CA', 'French', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'fr-CA');

/* German (de) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '3a7ff22b-ea96-4f50-9239-53fc2b921afb', 'de', 'German', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'de');

/* Greek (el) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'a6dd6c79-ded1-45f1-870d-566a54d2501f', 'el', 'Greek', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'el');

/* Hebrew (iw) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '23d0d0d1-bf01-44e0-93b6-9f1e08a5093b', 'iw', 'Hebrew', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'iw');

/* Hindi (hi) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '167ff3e1-44e7-40f7-8cff-5aa358551e87', 'hi', 'Hindi', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'hi');

/* Hungarian (hu) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'fa94ab02-d23a-4191-9fb4-852f501348a0', 'hu', 'Hungarian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'hu');

/* Icelandic (is) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'b5ac5a0f-2066-44d6-8247-5914f9e6ee60', 'is', 'Icelandic', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'is');

/* Italian (it) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '907aba94-a8b9-49c3-96ae-36ebe9741d5c', 'it', 'Italian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'it');

/* Japanese (ja) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'f95165c3-fe84-4bec-b8c0-5d54c49ed0e1', 'ja', 'Japanese', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'ja');

/* Korean (ko) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '54e0c233-4732-42b9-a78a-8a6d90c0a0a5', 'ko', 'Korean', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'ko');

/* Latvian (lv) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '073661be-3ffc-4a27-a5c7-0a6dbf4533ff', 'lv', 'Latvian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'lv');

/* Lithuanian (lt) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'ab6ebfac-f3c1-4cc4-a27f-29837e779b83', 'lt', 'Lithuanian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'lt');

/* Macedonian (mk) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '5fa84a84-da70-45e2-939e-b22d26ed4bb6', 'mk', 'Macedonian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'mk');

/* Norwegian (no) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'ab92e47d-0b24-41a8-a4f3-706a03f927a4', 'no', 'Norwegian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'no');

/* Polish (pl) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '9586e752-dbcb-425e-a6f2-5536470ab7f1', 'pl', 'Polish', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'pl');

/* Portuguese (pt) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '1eda3690-23e6-41d9-98f9-03b36d1a959e', 'pt', 'Portuguese', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'pt');

/* Romanian (ro) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'd0f246c3-fa58-41b1-8159-5a52549ad274', 'ro', 'Romanian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'ro');

/* Russian (ru) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '9e46f2db-ab4f-4d4c-8738-64a8e5a65d0e', 'ru', 'Russian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'ru');

/* Serbian (sr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '9bf4afad-45d4-4feb-9c72-4138e0f204b3', 'sr', 'Serbian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'sr');

/* Slovenian (sl) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '1e8b96c6-80a0-479e-8acd-4c6d79ec9bbc', 'sl', 'Slovenian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'sl');

/* Swedish (sv) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'ed6f73ce-7771-403e-9df4-ddd82440788e', 'sv', 'Swedish', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'sv');

/* Turkish (tr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '8a4faf7c-5849-4c39-a8a3-ed871f4461c2', 'tr', 'Turkish', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'tr');

/* Ukrainian (uk) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'ab9aabad-736f-446a-8975-f81eee5578a0', 'uk', 'Ukrainian', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'uk');

/* Spanish (es) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'e91a5329-258e-44bb-9ac4-b35f9ddec5a0', 'es', 'Spanish', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'es');

/* PortuguêsBrazil (pt-BR) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '73aa5101-540d-4c5b-bb6e-7e8c814a68a4', 'pt-BR', 'PortuguêsBrazil', false
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage WHERE CultureName = 'pt-BR');

