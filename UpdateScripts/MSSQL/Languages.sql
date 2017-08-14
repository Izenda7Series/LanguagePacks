
/* Arabic (ar) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'ar')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('c8a07bd5-c099-49ea-afb5-eea7767ef151', 'ar', 'Arabic', 0);
    END
END

/* Bulgarian (bg) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'bg')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('34216355-a0f7-41c7-b7cd-bb187cb604b9', 'bg', 'Bulgarian', 0);
    END
END

/* ChinesePeoplesRepublicofChina (zh-CN) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'zh-CN')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('aaa1a54b-5408-426e-a613-bfa006c81462', 'zh-CN', 'ChinesePeoplesRepublicofChina', 0);
    END
END

/* ChineseTaiwan (zh-TW) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'zh-TW')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('b98bd95d-76c2-477a-bd0a-c3facc0a5319', 'zh-TW', 'ChineseTaiwan', 0);
    END
END

/* Croatian (hr) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'hr')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('e45a3380-7374-44f8-b77d-56d5c887b196', 'hr', 'Croatian', 0);
    END
END

/* Czech (cs) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'cs')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('381e3dd6-a5b9-49a5-a645-cd7a76e9f827', 'cs', 'Czech', 0);
    END
END

/* Danish (da) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'da')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('579d788b-9dd9-429e-bca5-d805fcbb400b', 'da', 'Danish', 0);
    END
END

/* Dutch (nl) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'nl')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('6e1d52f2-afbc-4d18-ab3f-1be0c3b66cdd', 'nl', 'Dutch', 0);
    END
END

/* Estonian (et) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'et')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('0b1a5409-99b1-40b4-8462-6ad3426a5ffa', 'et', 'Estonian', 0);
    END
END

/* Finnish (fi) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'fi')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('d3fa462a-41ba-4417-bca5-eaf0bcbb0296', 'fi', 'Finnish', 0);
    END
END

/* French (fr) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'fr')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('a08d220c-9efd-4e05-88d0-55c19ea64103', 'fr', 'French', 0);
    END
END

/* German (de) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'de')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('3a7ff22b-ea96-4f50-9239-53fc2b921afb', 'de', 'German', 0);
    END
END

/* Greek (el) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'el')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('a6dd6c79-ded1-45f1-870d-566a54d2501f', 'el', 'Greek', 0);
    END
END

/* Hebrew (iw) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'iw')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('23d0d0d1-bf01-44e0-93b6-9f1e08a5093b', 'iw', 'Hebrew', 0);
    END
END

/* Hindi (hi) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'hi')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('167ff3e1-44e7-40f7-8cff-5aa358551e87', 'hi', 'Hindi', 0);
    END
END

/* Hungarian (hu) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'hu')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('fa94ab02-d23a-4191-9fb4-852f501348a0', 'hu', 'Hungarian', 0);
    END
END

/* Icelandic (is) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'is')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('b5ac5a0f-2066-44d6-8247-5914f9e6ee60', 'is', 'Icelandic', 0);
    END
END

/* Italian (it) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'it')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('907aba94-a8b9-49c3-96ae-36ebe9741d5c', 'it', 'Italian', 0);
    END
END

/* Japanese (ja) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'ja')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('f95165c3-fe84-4bec-b8c0-5d54c49ed0e1', 'ja', 'Japanese', 0);
    END
END

/* Korean (ko) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'ko')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('54e0c233-4732-42b9-a78a-8a6d90c0a0a5', 'ko', 'Korean', 0);
    END
END

/* Latvian (lv) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'lv')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('073661be-3ffc-4a27-a5c7-0a6dbf4533ff', 'lv', 'Latvian', 0);
    END
END

/* Lithuanian (lt) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'lt')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('ab6ebfac-f3c1-4cc4-a27f-29837e779b83', 'lt', 'Lithuanian', 0);
    END
END

/* Macedonian (mk) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'mk')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('5fa84a84-da70-45e2-939e-b22d26ed4bb6', 'mk', 'Macedonian', 0);
    END
END

/* Norwegian (no) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'no')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('ab92e47d-0b24-41a8-a4f3-706a03f927a4', 'no', 'Norwegian', 0);
    END
END

/* Polish (pl) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'pl')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('9586e752-dbcb-425e-a6f2-5536470ab7f1', 'pl', 'Polish', 0);
    END
END

/* Portuguese (pt) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'pt')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('1eda3690-23e6-41d9-98f9-03b36d1a959e', 'pt', 'Portuguese', 0);
    END
END

/* Romanian (ro) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'ro')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('d0f246c3-fa58-41b1-8159-5a52549ad274', 'ro', 'Romanian', 0);
    END
END

/* Russian (ru) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'ru')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('9e46f2db-ab4f-4d4c-8738-64a8e5a65d0e', 'ru', 'Russian', 0);
    END
END

/* Serbian (sr) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'sr')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('9bf4afad-45d4-4feb-9c72-4138e0f204b3', 'sr', 'Serbian', 0);
    END
END

/* Slovenian (sl) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'sl')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('1e8b96c6-80a0-479e-8acd-4c6d79ec9bbc', 'sl', 'Slovenian', 0);
    END
END

/* Swedish (sv) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'sv')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('ed6f73ce-7771-403e-9df4-ddd82440788e', 'sv', 'Swedish', 0);
    END
END

/* Turkish (tr) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'tr')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('8a4faf7c-5849-4c39-a8a3-ed871f4461c2', 'tr', 'Turkish', 0);
    END
END

/* Ukrainian (uk) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'uk')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('ab9aabad-736f-446a-8975-f81eee5578a0', 'uk', 'Ukrainian', 0);
    END
END

/* Português (Brazil) (pt-BR) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'pt-BR')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('04c7a0d4-21aa-4eb1-8e24-c14715466474', 'pt-BR', 'Português (Brazil)', 0);
    END
END

/* Spanish (es) */
BEGIN
    IF NOT EXISTS(SELECT * FROM[IzendaLanguage] WHERE[CultureName] = 'es')
    BEGIN
        INSERT INTO IzendaLanguage (Id, CultureName, Language, Deleted) VALUES('7b3dade8-5b0a-4f49-a5ae-187eaf9df280', 'es', 'Spanish', 0);
    END
END