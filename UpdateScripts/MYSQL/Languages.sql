
/* Arabic (ar) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'c8a07bd5-c099-49ea-afb5-eea7767ef151', 'ar', 'Arabic', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'ar')
LIMIT 1; 

/* Bulgarian (bg) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '34216355-a0f7-41c7-b7cd-bb187cb604b9', 'bg', 'Bulgarian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'bg')
LIMIT 1; 

/* ChinesePeoplesRepublicofChina (zh-CN) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'aaa1a54b-5408-426e-a613-bfa006c81462', 'zh-CN', 'ChinesePeoplesRepublicofChina', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'zh-CN')
LIMIT 1; 

/* ChineseTaiwan (zh-TW) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'b98bd95d-76c2-477a-bd0a-c3facc0a5319', 'zh-TW', 'ChineseTaiwan', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'zh-TW')
LIMIT 1; 

/* Croatian (hr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'e45a3380-7374-44f8-b77d-56d5c887b196', 'hr', 'Croatian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'hr')
LIMIT 1; 

/* Czech (cs) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '381e3dd6-a5b9-49a5-a645-cd7a76e9f827', 'cs', 'Czech', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'cs')
LIMIT 1; 

/* Danish (da) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '579d788b-9dd9-429e-bca5-d805fcbb400b', 'da', 'Danish', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'da')
LIMIT 1; 

/* Dutch (nl) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '6e1d52f2-afbc-4d18-ab3f-1be0c3b66cdd', 'nl', 'Dutch', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'nl')
LIMIT 1; 

/* Estonian (et) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '0b1a5409-99b1-40b4-8462-6ad3426a5ffa', 'et', 'Estonian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'et')
LIMIT 1; 

/* Finnish (fi) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'd3fa462a-41ba-4417-bca5-eaf0bcbb0296', 'fi', 'Finnish', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'fi')
LIMIT 1; 

/* French (fr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'a08d220c-9efd-4e05-88d0-55c19ea64103', 'fr', 'French', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'fr')
LIMIT 1; 

/* German (de) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '3a7ff22b-ea96-4f50-9239-53fc2b921afb', 'de', 'German', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'de')
LIMIT 1; 

/* Greek (el) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'a6dd6c79-ded1-45f1-870d-566a54d2501f', 'el', 'Greek', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'el')
LIMIT 1; 

/* Hebrew (iw) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '23d0d0d1-bf01-44e0-93b6-9f1e08a5093b', 'iw', 'Hebrew', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'iw')
LIMIT 1; 

/* Hindi (hi) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '167ff3e1-44e7-40f7-8cff-5aa358551e87', 'hi', 'Hindi', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'hi')
LIMIT 1; 

/* Hungarian (hu) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'fa94ab02-d23a-4191-9fb4-852f501348a0', 'hu', 'Hungarian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'hu')
LIMIT 1; 

/* Icelandic (is) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'b5ac5a0f-2066-44d6-8247-5914f9e6ee60', 'is', 'Icelandic', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'is')
LIMIT 1; 

/* Italian (it) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '907aba94-a8b9-49c3-96ae-36ebe9741d5c', 'it', 'Italian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'it')
LIMIT 1; 

/* Japanese (ja) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'f95165c3-fe84-4bec-b8c0-5d54c49ed0e1', 'ja', 'Japanese', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'ja')
LIMIT 1; 

/* Korean (ko) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '54e0c233-4732-42b9-a78a-8a6d90c0a0a5', 'ko', 'Korean', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'ko')
LIMIT 1; 

/* Latvian (lv) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '073661be-3ffc-4a27-a5c7-0a6dbf4533ff', 'lv', 'Latvian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'lv')
LIMIT 1; 

/* Lithuanian (lt) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'ab6ebfac-f3c1-4cc4-a27f-29837e779b83', 'lt', 'Lithuanian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'lt')
LIMIT 1; 

/* Macedonian (mk) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '5fa84a84-da70-45e2-939e-b22d26ed4bb6', 'mk', 'Macedonian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'mk')
LIMIT 1; 

/* Norwegian (no) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'ab92e47d-0b24-41a8-a4f3-706a03f927a4', 'no', 'Norwegian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'no')
LIMIT 1; 

/* Polish (pl) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '9586e752-dbcb-425e-a6f2-5536470ab7f1', 'pl', 'Polish', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'pl')
LIMIT 1; 

/* Portuguese (pt) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '1eda3690-23e6-41d9-98f9-03b36d1a959e', 'pt', 'Portuguese', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'pt')
LIMIT 1; 

/* Romanian (ro) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'd0f246c3-fa58-41b1-8159-5a52549ad274', 'ro', 'Romanian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'ro')
LIMIT 1; 

/* Russian (ru) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '9e46f2db-ab4f-4d4c-8738-64a8e5a65d0e', 'ru', 'Russian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'ru')
LIMIT 1; 

/* Serbian (sr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '9bf4afad-45d4-4feb-9c72-4138e0f204b3', 'sr', 'Serbian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'sr')
LIMIT 1; 

/* Slovenian (sl) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '1e8b96c6-80a0-479e-8acd-4c6d79ec9bbc', 'sl', 'Slovenian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'sl')
LIMIT 1; 

/* Swedish (sv) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'ed6f73ce-7771-403e-9df4-ddd82440788e', 'sv', 'Swedish', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'sv')
LIMIT 1; 

/* Turkish (tr) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '8a4faf7c-5849-4c39-a8a3-ed871f4461c2', 'tr', 'Turkish', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'tr')
LIMIT 1; 

/* Ukrainian (uk) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'ab9aabad-736f-446a-8975-f81eee5578a0', 'uk', 'Ukrainian', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'uk')
LIMIT 1; 

/* Spanish (es) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT 'e91a5329-258e-44bb-9ac4-b35f9ddec5a0', 'es', 'Spanish', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'es')
LIMIT 1; 

/* PortuguêsBrazil (pt-BR) */
INSERT INTO IzendaLanguage(Id, CultureName, Language, Deleted)
SELECT '73aa5101-540d-4c5b-bb6e-7e8c814a68a4', 'pt-BR', 'PortuguêsBrazil', 0 FROM IzendaLanguage
WHERE NOT EXISTS(SELECT* FROM IzendaLanguage
      WHERE CultureName= 'pt-BR')
LIMIT 1; 
